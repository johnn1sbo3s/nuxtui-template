<template>
  <Menubar :model="items" class="menuBar">
    <template v-slot:start>
      <img :src="myLogo" :alt="myAlt" id="logo">
    </template>
  </Menubar>
</template>


<script>
import Menubar from 'primevue/menubar';

export default {
  name: 'HomeView',
  
  components: {
    Menubar,
  },

  data() {
    return {
      myLogo: '/favicon-32x32.png',
      myAlt: 'BigBen Logo',
      items: [
        {
          label: 'Apostas do dia',
          icon: 'pi pi-calendar',
        },
        {
          label: 'Resultados dos modelos',
          icon: 'pi pi-chart-bar',
        },
      ]
    };
  }
}
</script>

<style scoped>
@import url('primeicons/primeicons.css');

#logo {
  width: 32px;
  margin: 0 10px 0 10px;
}

</style>