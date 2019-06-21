<template>
<div class="column is-2" >
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      
      <div class="media-content">
        <p class="title is-4">{{mapaData.estacion}}</p>
        <p class="subtitle is-6 has-text-primary">{{mapaData.fase}}</p>
      </div>
    </div>

    <div class="content  has-text-left">
      <p class="mapa-descripcion">{{mapaData.descripcion}}</p>
    </div>
    
  </div>
  
</div>
</div>
</template>
<script>
export default {
    name: 'AppMapa',
    props: ['mapaData']
}
</script>
<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.mapa-descripcion{
    font-size: .6rem!important;
    color:green;
     @media screen and (max-width: 1087px) {
        font-size: 1.5rem!important;
        color:red;
    }
}
</style>
