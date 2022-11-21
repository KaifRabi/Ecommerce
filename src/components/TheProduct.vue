<template>
  <div
    class="relative w-60 bg-white shadow-md rounded-lg pb-4 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
    v-if="isToggle ? data.sale : true"
    v-show="
      itemSearch === ''
        ? true
        : data.title.toLowerCase().includes(itemSearch.toLowerCase())
    "
  >
    <img
      class="mx-auto w-48 h-48"
      :src="require('../assets/products/' + data.path)"
    />
    <div class="flex items-center justify-between p-4">
      <h3 class="text-3xl font-bold">{{ data.title }}</h3>
      <p>${{ data.price }}</p>
    </div>
    <p
      v-if="sale"
      class="absolute top-0 right-0 translate-x-3 -translate-y-6 text-center py-4 font-bold text-green-500"
    >
      Sale
    </p>
    <p
      class="bg-gray-200 w-max mx-auto py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:bg-green-500 hover:text-white"
    >
      Add to cart
    </p>
    <div class="fixed top-0 right-0">{{items}}</div>
  </div>
</template>

<script>
export default {
  props: { data: Object, sale: Boolean, isToggle: Boolean, itemSearch: String },
  data() {
    return {
      items: ''
    }
  },
};
</script>

<style lang="scss" scoped></style>
