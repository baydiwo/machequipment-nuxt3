<template>
  <div>
    <section class="bg-slate-100">
      <div class="max-w-screen-md mx-auto pt-20 pb-24">
        <div class="flex flex-col text-center">
          <h1 class="text-green-900 text-4xl font-semibold">{{ data.title }}</h1>
          <h2 class="text-lg mt-4">
            {{ data.intro }}
          </h2>
        </div>
      </div>
    </section>
    <div class="bg-white pb-20">
      <div class="max-w-screen-md mx-auto">

        <SanityImage :asset-id="data.heroImage.asset._ref" auto="format"
          class="aspect-video rounded-2xl object-cover -translate-y-20 object-bottom brightness-110 contrast-[1.2]"
          alt="" width="1600" height="900" />
        <div class="space-y-5 prose">
          <!-- <pre>
				{JSON.stringify(data.body, null, 2)}
			</pre> -->
          <SanityContent :blocks="data.body" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const query = groq`
*[_type == 'services']{title, intro, heroImage, body}[0]
`
const { data, refresh } = useSanityQuery(query)
</script>

<style lang="scss" scoped>
</style>