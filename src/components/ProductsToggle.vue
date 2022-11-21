<template>
   <div>
      <div class="flex items-center justify-center gap-6 mt-32">
        <div class="cursor-pointer">
          All Products
        </div>

        <!-- switch -->
        <div
          class="w-10 rounded-xl h-4 bg-gray-900 flex cursor-pointer transition-all duration-300 ease-in-out"
          :style="{ paddingLeft: (isToggle ? '24px' : '0px'), backgroundColor: (isToggle ? 'green' : '#1F2937') }"
          @click="toggle()"
        >
          <div class="h-4 w-4 border-black border-2 bg-white rounded-full scale-[1.1]"></div>
        </div>

        <div class="cursor-pointer">Discount</div>
      </div>
    </div>
</template>

<script>
    export default {
        props: ['isToggle'],
        methods: {
          toggle() {
            this.$emit('toggle', this.isToggle)
          }
        },
    }
</script>

<style lang="scss" scoped>

</style>