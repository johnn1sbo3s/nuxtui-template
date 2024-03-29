<template>
  <div class="bg-violet-700 p-2 w-full h-12">
    <!-- <div v-for="link in links" :key="index" class="bg-white">
      <NuxtLink :to="link.path">{{ link.name }}</NuxtLink>
    </div> -->
  </div>
  <NuxtPage />
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