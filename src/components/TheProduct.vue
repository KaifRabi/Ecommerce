<template>
  <div
    class="relative w-60 bg-white shadow-md rounded-lg pb-4 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
    v-if="isDiscounted"
    v-show="findItem"
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
      v-if="data.sale"
      class="absolute top-0 right-0 translate-x-3 -translate-y-6 text-center py-4 font-bold text-green-500"
    >
      Sale
    </p>
    <p
      class="bg-gray-200 w-max mx-auto py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:bg-green-500 hover:text-white"
      @click="addedToCart()"
    >
      Add to cart
    </p>
  </div>
</template>

<script>
export default {
  props: { data: Object, sale: Boolean, isToggle: Boolean, itemSearch: String },
  data() {
    return {
      isDiscount: false,
      selectedItemData: []
    };
  },
  methods: {
    addedToCart() {
      this.selectedItemData.push(this.data)
      this.$emit('addedToCart', this.selectedItemData)
    }
  },
  computed: {
    isDiscounted: function () {
      return this.isToggle ? this.data.sale : true;
    },
    findItem: function () {
      return this.itemSearch === ""
        ? true
        : this.data.title.toLowerCase().includes(this.itemSearch.toLowerCase());
    },
  },
};
</script>

<style lang="scss" scoped></style>
