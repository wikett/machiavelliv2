<template>
    <section class="hero is-dark is-medium">
        <div class="hero-body" style="padding-top: 4rem;">
            <div class="container has-text-centered"><br> <img src="@/assets/logo-azul.png" width="200px">
                <h2 class="subtitle is-4">
                    Entrega de órdenes: <span class="has-text-weight-bold">{{staticJson.limiteOrdenes}}</span>
                </h2>

                <div class="container" style="margin-top:2rem">
                    <div class="columns is-multiline reverse-row-order">
                            <AppMapa 
                                v-for="(item, index) in staticJson.campanyas"
                                :key="index"
                                v-bind:mapaData="item"
                                v-on:messageFromChild="abrirGaleria">
                            </AppMapa>
                    </div>
                </div>
                
                
            </div>
            
            
        </div>



        <!-- Root element of PhotoSwipe. Must have class pswp. -->
        <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

            <!-- Background of PhotoSwipe. 
                It's a separate element as animating opacity is faster than rgba(). -->
            <div class="pswp__bg"></div>

            <!-- Slides wrapper with overflow:hidden. -->
            <div class="pswp__scroll-wrap">

                <!-- Container that holds slides. 
                    PhotoSwipe keeps only 3 of them in the DOM to save memory.
                    Don't modify these 3 pswp__item elements, data is added later on. -->
                <div class="pswp__container">
                    <div class="pswp__item"></div>
                    <div class="pswp__item"></div>
                    <div class="pswp__item"></div>
                </div>

                <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
                <div class="pswp__ui pswp__ui--hidden">

                    <div class="pswp__top-bar">

                        <!--  Controls are self-explanatory. Order can be changed. -->

                        <div class="pswp__counter"></div>

                        <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

                        <button class="pswp__button pswp__button--share" title="Share"></button>

                        <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

                        <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

                        <!-- Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR -->
                        <!-- element will get class pswp__preloader--active when preloader is running -->
                        <div class="pswp__preloader">
                            <div class="pswp__preloader__icn">
                            <div class="pswp__preloader__cut">
                                <div class="pswp__preloader__donut"></div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                        <div class="pswp__share-tooltip"></div> 
                    </div>

                    <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
                    </button>

                    <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
                    </button>

                    <div class="pswp__caption">
                        <div class="pswp__caption__center"></div>
                    </div>

                </div>

            </div>

        </div>
    </section>

    
</template>

<script>

// @ is an alias to /src
import AppMapa from '@/components/mapas/AppMapa.vue';
import reviewsData from '@/assets/mapas.json'

export default {
    name: 'home',
    components: {
        AppMapa
    },
    data: function(){
        return{
            gallery: null,
            staticJson: reviewsData
        }
    },
    created(){
        console.log(`created`)
    },
    mounted(){
        console.log(`mounted`);
    },
    methods: {
        say: function (msg) {
            this.gallery.init();
        },
        abrirGaleria: function(indexMapa){
            console.log(`abrir la foto: ${indexMapa}`)
            this.openGallery(indexMapa);
        },
        openGallery: function(numeroSlide){
            console.log(`numeroSlide: ${numeroSlide}`)
            var pswpElement = document.querySelectorAll('.pswp')[0];
            // build items array
            var items = [
                {
                    src: 'https://res.cloudinary.com/djhqderty/image/upload/v1561146043/machiavelli%201750/1750_hambruna.jpg',
                    w: 3410,
                    h: 2168
                },
                {
                    src: 'https://res.cloudinary.com/djhqderty/image/upload/v1561146039/machiavelli%201750/1750_ajustes_militares.jpg',
                    w: 3410,
                    h: 2168
                },
                {
                    src: 'https://res.cloudinary.com/djhqderty/image/upload/v1561146037/machiavelli%201750/1750_movimiento_primavera.jpg',
                    w: 3410,
                    h: 2168
                },
                {
                    src: 'https://res.cloudinary.com/djhqderty/image/upload/v1561317362/machiavelli%201750/1750_plaga22.jpg',
                    w: 3410,
                    h: 2168
                },
                {
                    src: 'https://res.cloudinary.com/djhqderty/image/upload/v1561408517/machiavelli%201750/1750_verano_movimientos.jpg',
                    w: 3410,
                    h: 2168
                }
            ];

             // define options (if needed)
            var options = {
                index:numeroSlide,
                history: false
                
            };
            this.gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
            this.gallery.init();
        }
    }

    }
</script>
<style lang="scss" scoped>
.fade {
    
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
 .reverse-column-order {
    @media screen and (min-width: 769px) { 
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>
