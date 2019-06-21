<template>
<div class="column is-12-mobile is-half-tablet is-2-desktop"  >
<div class="card">
  <div class="card-image">
    <a href="#" @click="openGaleria()">
        <figure class="image is-4by3">
      <img :src="getImagen(mapaData.index)" alt="Placeholder image">
    </figure>
    </a>
  </div>
  <div class="card-content">
    <div class="media">
      
      <div class="media-content">
        <p class="title is-5">{{mapaData.estacion}}</p>
        <p class="subtitle is-7 has-text-primary">{{mapaData.fase}}</p>
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
    props: ['mapaData'],
    methods: {
        openGaleria(){
            console.log(`open Galeria: ${this.mapaData.index}`);
            this.$emit('messageFromChild',this.mapaData.index);
        },
        getImagen(index){
            switch(index) {
  case 0:
    return "https://res.cloudinary.com/djhqderty/image/upload/v1561148205/hambruna_ksutbt.jpg"
    break;
  case 1:
    return "https://res.cloudinary.com/djhqderty/image/upload/v1561148205/ajustes_militares_ak1qms.jpg"
    break;
    case 2:
    return "https://res.cloudinary.com/djhqderty/image/upload/v1561148205/movimientos_srw2ng.jpg"
    break;
    case 3:
    return "https://res.cloudinary.com/djhqderty/image/upload/v1561148205/plaga_tzex8q.jpg"
    break;
  default:
    // code block
}
        }
    }
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
     @media screen and (max-width: 1087px) {
        font-size: 1.5rem!important;
        
    }
}
</style>
