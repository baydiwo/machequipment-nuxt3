<template>
  <section class="bg-slate-100">
    <div class="wrapper">
      <div class="flex flex-col text-center py-16">
        <h1 class="text-green-900 text-4xl font-semibold">Used Equipment</h1>
        <h2 class="text-lg mt-4">
          Mach Equipment sources and supplies second hand heavy equipment across the country.
        </h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 mt-10 gap-12 pb-24">
        <Card :product="item" v-for="item in data" />
      </div>
    </div>
  </section>
</template>

<script setup>
const query = groq`
*[_type == 'product' && defined(publishedAt)]{title,slug, attributes, mainImage, brand, price} | order(publishedAt desc)
`
const { data, refresh } = useSanityQuery(query)
</script>

<style lang="scss" scoped>
</style>