<template>
  <header>
    <nav class="flex justify-between px-8 py-4 shadow-md bg-white w-full fixed z-10 top-0">
      <!-- logo -->
      <h3 class="text-3xl font-bold">
        E-<span class="text-red-500">Commerce</span>
      </h3>
      <!-- search bar -->
      <form class="flex items-center">
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-[300px]">
          <input
            type="text"
            id="simple-search"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
      <!-- cart -->
      <div class="flex">
        <img src="../assets/logos/cart.svg" alt="cart" />
        <div class="bg-red-600 p-1 px-3 text-white font-bold rounded-full my-auto">3</div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      search: this.itemSearch
    }
  },
  methods: {
    sendSearchData() {
      this.$emit('searchData', this.search)
    }
  },
};
</script>
