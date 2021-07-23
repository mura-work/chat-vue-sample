<template>
  <div id="app">
    <header-view></header-view>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderView from './components/Header.vue'

export default {
  name: 'App',

  components: {
    HeaderView,
  },

  data: () => ({
    //
  }),
};
</script>
