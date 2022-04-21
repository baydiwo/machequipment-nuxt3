<template>
  <div>

    <!-- hero -->
    <section class="p-0">
      <div class="h-[553px] w-full flex items-center justify-center relative">
        <!-- overlay gradient -->
        <!-- <div
          class="bg-gradient-to-t from-bg-gray-900 via-[rgba(30, 40, 48, 0.3)] to-[rgba(30, 40, 48, 0.3)] absolute inset-x-0 bottom-0 h-1/3 z-20 bg-blend-normal"
        /> -->
        <div class="bg-gray-900 absolute inset-0 z-20 bg-opacity-40" />
        <!-- bg -->
        <div class="absolute inset-0 z-0">
          <SanityImage :asset-id="data.heroImage.asset._ref" auto="format" class="object-cover w-screen h-full"
            alt="" />
        </div>
        <!-- text center center -->
        <div class="text-center text-white relative z-30">
          <h1 class="text-5xl font-bold">{{ data.title }}</h1>
          <h2 class="text-lg mt-4">
            {{ data.intro }}
          </h2>
        </div>
      </div>
    </section>
    <TheSimilarProduct mode="black" />
  </div>
</template>

<script>
export default {
  setup() {
    return { data }
  }
}
</script>

<style lang="scss" scoped>
</style>

<script setup>
const query = groq`*[_type == 'home']{title, intro, heroImage}[0] `
const { data, refresh } = useSanityQuery(query)
console.log(data, '<----data')
</script>