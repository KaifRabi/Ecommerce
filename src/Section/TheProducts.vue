<template>
  <div class="flex gap-4 flex-wrap mx-auto justify-center max-w-5xl py-14">
    <TheProduct v-for="product in products" :data="product" :key="product.id"/>
  </div>
</template>

<script>
import items from "@/assets/products/products.json";
import TheProduct from "@/components/TheProduct.vue";
export default {
  components: {
    TheProduct,
  },
  data() {
    return {
      products: items.products,
    };
  },
};
</script>
