<template>
  <div class="flex gap-4 flex-wrap mx-auto justify-center max-w-5xl py-14">
    <TheProduct v-for="(product, index) in products" :data="product" :is-toggle="isToggle" :item-search="itemSearch" :key="index"/>
  </div>
</template>

<script>
import productsURL from "@/assets/products/products.json";
import TheProduct from "@/components/TheProduct.vue";
export default {
    props: ['isToggle', 'itemSearch'],
  components: {
    TheProduct,
  },
  data() {
    return {
      products: productsURL.products,
      selectedItem: ''
    };
  }
};
</script>
