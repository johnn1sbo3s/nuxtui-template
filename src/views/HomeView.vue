<template>
  <div>
    <Menubar :model="items" class="menuBar">
      <template v-slot:start>
        <img :src="myLogo" :alt="myAlt" id="logo">
      </template>
      <template #item="{ item, props }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
              <span :class="item.icon" />
              <span class="ml-3">{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
          <span :class="item.icon" />
          <span class="ml-3">{{ item.label }}</span>
          <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
        </a>
      </template>
    </Menubar>
  </div>
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
          route: '/about',
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