<template>
<div class="column is-12-mobile is-half-tablet is-2-desktop"  >
  <a href="#" @click="openGaleria()">
<div class="card">

  <div class="card-image">
    
        <figure class="image is-4by3">
      <img :src="getImagen(mapaData.index)" alt="Placeholder image">
    </figure>
      <div class="anyo">
        <span>{{mapaData.anyo}}</span>
      </div>
    
  </div>
  <div class="card-content">
    <div class="media">
      
      <div class="media-content">
        <p v-bind:class="{'primavera': mapaData.estilo=='primavera', 'verano': mapaData.estilo=='verano', 'otonyo': mapaData.estilo=='otonyo'}">{{mapaData.estacion}}</p>
        <p class="subtitle is-7 has-text-primary fase">{{mapaData.fase}}</p>
      </div>
    </div>

    <div class="content  has-text-left">
      <p class="mapa-descripcion">{{mapaData.descripcion}}</p>
    </div>
    
  </div>
  
</div>
</a>
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
            console.log(`${index}%6: ${index%6}`)
            switch(index%6) {
  case 0:
    return "https://res.cloudinary.com/djhqderty/image/upload/v1561148205/hambruna_ksutbt.jpg"
    break;
  case 1:
    return "https://res.cloudinary.com/djhqderty/image/upload/v1561148205/ajustes_militares_ak1qms.jpg"
    break;
  case 2:
  case 4:
  case 5:
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
    font-size: 1rem !important;
    min-height: 144px;
     @media screen and (max-width: 1087px) {
        //font-size: 1.5rem!important;
        
    }
}
.anyo {
    position: absolute;
    top: 0%;
    left: 0%;
    background-color: #0c07054a;
    width: 100%;
    color: white;
    font-size: 2rem;

    span {
      font-size: 2rem;
      color: white;
    }
}
.primavera{
    color: green;
    font-size: 2rem;
    font-weight: bold;
}
.verano {
    color: #ea842a;
    font-size: 2rem;
    font-weight: bold;
}
.otonyo {
    color: #733a07;
    font-size: 2rem;
    font-weight: bold;
}
.fase{
  font-size: 1rem;
    font-weight: bold;
}
</style>
