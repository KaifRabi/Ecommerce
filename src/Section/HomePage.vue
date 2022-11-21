<template>
  <div>
    <NavBar :item-search="itemSearch" @searchData="search($event)"/>
    <ProductsToggle :is-toggle="isToggle" @toggle="isToggle = !isToggle" />
    <TheProducts :is-toggle="isToggle" :item-search="itemSearch"/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import TheProducts from "./TheProducts.vue";
import ProductsToggle from "@/components/ProductsToggle.vue";
export default {
  components: {
    NavBar,
    TheProducts,
    ProductsToggle,
  },
  data() {
    return {
      isToggle: false,
      itemSearch: "",
      uData: ""
    };
  },
  methods: {
    search(e) {
      this.itemSearch = e;
    },
  },
};
</script>

<style lang="scss" scoped></style>
