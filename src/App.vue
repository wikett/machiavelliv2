<template>
  <div id="app">
    <AppHeader />
    <router-view/>
  </div>
</template>
<script>

import AppHeader from '@/components/layout/AppHeader.vue';
export default {
  name: 'home',
  components: {
    AppHeader
  },
};
</script>
<style lang="scss">
html {
  background-color: rgba(9,38,66,.95);
  color: #dbdbdb;
}
body {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem;
  letter-spacing: 1px;
  
}
</style>
