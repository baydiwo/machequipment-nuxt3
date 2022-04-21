<template>
  <div>
    <pre>
      {{ data }}
    </pre>
    <!-- <SimilarProduct ref="{product.make._ref}" /> -->
  </div>
</template>

<script setup>
const route = useRoute()
const query = groq`
*[_type == 'product' && defined(publishedAt) && slug.current == $slug][0]{..., "brand": make->{title}}
`
const { data, refresh } = useSanityQuery(query, { slug: route.params.slug })
</script>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style lang="scss" scoped>
</style>