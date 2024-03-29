<template>
  <div class="bg-violet-700 w-full">
    <h1 class="font-bold px-4 py-5">This is the project start</h1>
  </div>
  <div class="m-4 flex justify-center">
    <UButton label="Button" size="md"/>
  </div>
</template>

<script setup>

const links = ref([
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  }
])
</script>

<style>
</style>