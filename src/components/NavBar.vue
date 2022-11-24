<template>
  <header>
    <nav
      class="flex justify-between px-8 py-4 shadow-md bg-white w-full fixed z-10 top-0"
    >
      <!-- logo -->
      <h3 class="hidden sm:block text-lg sm:text-xl md:text-3xl font-bold">
        E-<span class="text-red-500">Commerce</span>
      </h3>
      <!-- search bar -->
      <!-- absolute top-20 left-[calc(50%-150px)] -->
      <form class="flex items-center">
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-max">
          <input
            type="text"
            id="simple-search"
            class="w-[150px] sm:w-[200px] md:w-[300px]  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 pl-4 p-1 sm:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
            v-model="search"
            @input="sendSearchData"
          />
          <div
            class="absolute inset-y-0 right-4 flex items-center pl-3 pointer-events-none"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </form>

      <!-- cart and register buttons -->
      <div class="flex gap-4">
        <!-- Register Buttons -->
        <div class="flex gap-1 md:gap-4 items-center">
          <a href="" class="py-0 md:py-2 px-4 -mr-2">Login</a>
          <a href="" class="py-0 md:py-2 px-1 md:px-4 text-white bg-green-500 rounded-md">Register</a>
        </div>
        <img
          src="../assets/logos/cart.svg"
          alt="cart"
          @click="cartToggle = !cartToggle"
          class="cursor-pointer w-8 h-8 my-auto"
        />
        <div
          v-if="cartItems.length > 0"
          class="absolute right-0 top-0 scale-90 sm:static bg-red-600 p-1 px-3 text-white font-bold rounded-full my-auto"
        >
          {{ cartItems.length }}
        </div>
      </div>
      <div
        v-if="cartToggle"
        class="absolute text-2xl py-8  top-20 w-full right-0 h-64 bg-slate-300 text-center"
      >
        <h1 class="">Total Items</h1>
        <div class="max-w-64">
          {{ cartItems.map((e) => e.title).join(",") }}
        </div>
        <h1 class="">Total Price</h1>
        <div class="">{{ totalPrice }}$</div>
        <a class="bg-red-500 cursor-pointer text-white" @click="emptyCart()"
          >Reset</a
        >
      </div>
      <!-- hamburger menu -->
      <!-- <div class="block md:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-gray-900"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path
              d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
            ></path>
          </svg>
        </button>
      </div> -->
    </nav>
  </header>
</template>

<script>
import productsURL from "@/assets/products/products.json";
export default {
  name: "NavBar",
  data() {
    return {
      products: productsURL.products,
      search: this.itemSearch,
      itemsSelected: 0,
      cartToggle: false,
    };
  },
  // for store
  computed: {
    cartItems() {
      return this.$store.state.cart;
    },
    totalPrice() {
      return this.$store.state.totalPrice;
    },
  },
  methods: {
    sendSearchData() {
      this.$store.commit("searchData", this.search);
    },
    emptyCart() {
      this.$store.commit("emptyCart");
    },
  },
};
</script>
