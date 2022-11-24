<template>
  <div>
    <NavBar />
    <!-- <Login /> -->
    <!-- <Register /> -->
    <!-- <Forgot /> -->
    <ProductsToggle />
    <TheProducts />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import TheProducts from "./TheProducts.vue";
import ProductsToggle from "@/components/ProductsToggle.vue";
// import Login from "@/components/loginPage.vue";
// import Register from "@/components/registerPage.vue";
//  import Forgot from "@/components/forgotPassword.vue";
export default {
  components: {
    NavBar,
    // Login,
    // Register,
    // Forgot,
    TheProducts,
    ProductsToggle,
    
  },

  data() {
    return {
      isToggle: false,
      itemSearch: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
