<template>
    <section class="hero is-dark is-medium">
        <div class="hero-body">
            <div class="container has-text-centered"><br> <img src="@/assets/logo-azul.png" width="200px">
                <h2 class="subtitle is-4">
                    Entrega de órdenes: <span class="has-text-weight-bold">{{staticJson.limiteOrdenes}}</span>
                </h2>

                <div class="container">
                    <div class="columns is-multiline ">
                            <AppMapa 
                                v-for="(item, index) in staticJson.campanyas"
                                :key="index"
                                v-bind:mapaData="item">
                            </AppMapa>
                    </div>
                </div>
                
                
            </div>
            
            <button id="btn">Open PhotoSwipe</button>
            <button v-on:click="openGallery(0)">Say Hi</button>
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
    mounted(){
        console.log(`Created`);
    },
    methods: {
        say: function (msg) {
            this.gallery.init();
        },
        openGallery: function(numeroSlide){
            console.log(`numeroSlide: ${numeroSlide}`)
            var pswpElement = document.querySelectorAll('.pswp')[0];
            // build items array
            var items = [
                {
                    src: 'https://picsum.photos/4680/3320',
                    w: 4680,
                    h: 3320
                },
                {
                    src: 'https://placekitten.com/1200/900',
                    w: 1200,
                    h: 900
                }
            ];

             // define options (if needed)
            var options = {
                index:numeroSlide
                
            };
            this.gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
            this.gallery.init();
        }
    }

    }
</script>
<style lang="scss" scoped>
.fade {
    color:red;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
