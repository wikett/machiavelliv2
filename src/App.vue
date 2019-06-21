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
// @media only screen and (max-width: 769px) {
//     reverse-row-order{
//      flex-direction:row-reverse !important;
//    }
// }
</style>
