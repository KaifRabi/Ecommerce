<template>
  <form
    class="flex flex-col gap-4 bg-white shadow-md rounded-md p-8 mt-48 mb-8 justify-center w-max mx-auto"
  >
    <label class="text-xs">Username:</label>
    <input
      class="text-sm font-light p-2 rounded-md outline outline-1 outline-gray-300 focus:outline-gray-500"
      type="text"
      placeholder="Type Username"
    />
    <label class="text-xs">Email:</label>
    <input
      class="text-sm font-light p-2 rounded-md outline outline-1 outline-gray-300 focus:outline-gray-500"
      type="email"
      placeholder="Type Email"
    />
    <label class="text-xs">Password:</label>
    <input
      class="text-sm font-light p-2 rounded-md outline outline-1 outline-gray-300 focus:outline-gray-500"
      type="Password"
      placeholder="Type Password"
    />
    <label class="text-xs">Confirm:</label>
    <input
      class="text-sm font-light p-2 rounded-md outline outline-1 outline-gray-300 focus:outline-gray-500"
      type="Password"
      placeholder="Confirm Password"
    />    <a
      href=""
      class="mx-auto bg-green-500 py-2 px-4 rounded-md shadow text-white font-bold transition duration-300 ease-in-out hover:bg-green-600"
    >
      Sign Up
    </a>
    <a href="" class="text-center"
      >Already Registered?
      <span class="text-blue-500 underline">Sign In</span></a
    >
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
