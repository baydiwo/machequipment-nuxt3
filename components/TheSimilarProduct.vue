<template>
  <section class="relative" :class="mode === 'white' ? 'bg-white' : 'bg-gray-900'">
    <div class="wrapper relative z-10">
      <div class="flex flex-row justify-between" v-if="mode === 'white'">
        <p class="text-me-green font-semibold text-lg">Similar items</p>
      </div>
      <div class="flex flex-row justify-between" v-else>
        <p class="text-white text-2xl font-semibold">Latest equipment</p>
        <a class="text-white flex items-center" href="/used-equipment">
          View All
          <svg viewBox="0 -5 24 24" fill="none" class="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L8 8L1 15" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 mt-10 gap-12 pb-24">
        <Card v-for="item in data" :product="item" />
      </div>
    </div>
    <div class="-mx-10 -mt-36 -mb-10" v-if="mode !== 'white'">
      <img src="/footer-bg.jpg" class="object-cover w-full h-full object-bottom" alt="" />
    </div>
  </section>
</template>

<script setup>
const query = groq`
*[_type == 'product' && defined(publishedAt)] 
{  ..., "brand": make->{title} } [0..2]
`
const { data, refresh } = useSanityQuery(query)
</script>

<script>
export default {
  setup() {
    return {
    }
  },
  props: {
    mode: {
      type: String,
      default: 'white'
    },
  },
}
</script>

<style lang="scss" scoped>
</style>