<template>
  <a :href="'/used-equipment/' + product.slug.current"
    class="hover:shadow-lg transition ease-linear delay-150 duration-200 hover:scale-105">
    <div class="card rounded-md md:h-full bg-green-800 overflow-hidden flex flex-col">

      <SanityImage :asset-id="product.mainImage.asset._ref" auto="format" width="400" height="260"
        class="aspect-[3/2] object-cover" alt="" />
      <div class="pt-6 pb-7 px-8 flex flex-col justify-between h-full">
        <div>
          <!-- <p class="capitalize" class:hidden={!product.brand}>{product.brand.title}</p> -->
          <h3 class="text-white text-2xl font-semibold">{{ product.title }}</h3>
        </div>
        <div class="flex divide-y divide-white/25 text-white flex-col mt-6">
          <p class="pb-3 text-xl" :class="{ 'hidden': !product.price }">
            {{ product.price }} <span class="text-sm">inc. GST</span>
          </p>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  setup() {
    return {}
  },
  props: {
    product: {
      type: Object,
      default: () => { }
    },
  },
}
</script>

<style lang="scss" scoped>
</style>