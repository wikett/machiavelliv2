(function(t){function a(a){for(var s,n,o=a[0],l=a[1],c=a[2],p=0,d=[];p<o.length;p++)n=o[p],i[n]&&d.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(a);while(d.length)d.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,n=1;n<e.length;n++){var l=e[n];0!==i[l]&&(s=!1)}s&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},i={app:0},r=[];function n(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"91d39aac"}[t]+".js"}function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.e=function(t){var a=[],e=i[t];if(0!==e)if(e)a.push(e[2]);else{var s=new Promise(function(a,s){e=i[t]=[a,s]});a.push(e[2]=s);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=n(t),r=function(a){l.onerror=l.onload=null,clearTimeout(c);var e=i[t];if(0!==e){if(e){var s=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src,n=new Error("Loading chunk "+t+" failed.\n("+s+": "+r+")");n.type=s,n.request=r,e[1](n)}i[t]=void 0}};var c=setTimeout(function(){r({type:"timeout",target:l})},12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(a)},o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=a,l=l.slice();for(var p=0;p<l.length;p++)a(l[p]);var u=c;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"235c":function(t,a,e){t.exports=e.p+"img/logo-azul.60aeddae.png"},"394e":function(t){t.exports={limiteOrdenes:"Lunes 24 de Junio a las 21 horas.",campanyas:[{anyo:1750,imagen:"hambruna.jpg",estacion:"Primavera",fase:"Hambruna",estilo:"primavera",descripcion:"Este es un año bueno, habrá poca hambruna. Se permitirá algo de derroche.",index:0},{anyo:1750,imagen:"ajustes_militares.jpg",estacion:"Primavera",fase:"Ajustes Militares",estilo:"primavera",descripcion:"Todas las tropas están listas en sus territorios dispuestas a la aventura.",index:1},{anyo:1750,imagen:"http://res.cloudinary.com/djhqderty/image/upload/v1514593909/machiavelli/ellq0budkcmvhtpudwno.jpg",estacion:"Primavera",fase:"Movimientos",estilo:"primavera",descripcion:"Los primeros movimientos del año. Se intuye ya posibles alianzas y enemigos.",index:2},{anyo:1750,imagen:"http://res.cloudinary.com/djhqderty/image/upload/v1514593909/machiavelli/ellq0budkcmvhtpudwno.jpg",estacion:"Verano",fase:"Plaga",estilo:"verano",descripcion:"La plaga cae moderada (8). Unidades autónomas se han muerto por esto.",index:3}]}},5333:function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("AppHeader"),e("router-view")],1)},r=[],n=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar is-dark is-fixed-top"},[s("div",{staticClass:"navbar-brand"},[s("a",{staticClass:"navbar-item router-link-exact-active router-link-active",attrs:{href:"#/"}},[s("img",{attrs:{src:e("235c"),alt:"Machiavelli 1750"}})]),s("div",{staticClass:"navbar-burger burger ",attrs:{"data-target":"navbarExampleTransparentExample"}},[s("span"),s("span"),s("span")])]),s("div",{staticClass:"navbar-menu ",attrs:{id:"navbarExampleTransparentExample"}},[s("div",{staticClass:"navbar-start"},[s("a",{staticClass:"navbar-item is-active router-link-active",attrs:{href:"#/",title:"La Partida"}},[s("span",[t._v("La Partida")])]),s("a",{staticClass:"navbar-item",attrs:{href:"#/jugadores",title:"Jugadores"}},[s("span",[t._v("Jugadores")])]),s("a",{staticClass:"navbar-item",attrs:{href:"#/manual",title:"Manual"}},[s("span",[t._v("Manual")])]),s("a",{staticClass:"navbar-item",attrs:{href:"#/sugerencias",title:"Sugerencias"}},[s("span",[t._v("Sugerencias")])])])])])}],l={name:"AppHeader"},c=l,p=e("2877"),u=Object(p["a"])(c,n,o,!1,null,"76aa2712",null),d=u.exports,m={name:"home",components:{AppHeader:d}},v=m,_=(e("5c0b"),Object(p["a"])(v,i,r,!1,null,null,null)),h=_.exports,f=e("8c4f"),b=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"hero is-dark is-medium"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container has-text-centered"},[s("br"),s("img",{attrs:{src:e("235c"),width:"200px"}}),s("h2",{staticClass:"subtitle is-4"},[t._v("\n                Entrega de órdenes: "),s("span",{staticClass:"has-text-weight-bold"},[t._v(t._s(t.staticJson.limiteOrdenes))])]),s("div",{staticClass:"container"},[s("div",{staticClass:"columns is-multiline reverse-row-order"},t._l(t.staticJson.campanyas,function(a,e){return s("AppMapa",{key:e,attrs:{mapaData:a},on:{messageFromChild:t.abrirGaleria}})}),1)])])]),t._m(0)])},g=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pswp",attrs:{tabindex:"-1",role:"dialog","aria-hidden":"true"}},[e("div",{staticClass:"pswp__bg"}),e("div",{staticClass:"pswp__scroll-wrap"},[e("div",{staticClass:"pswp__container"},[e("div",{staticClass:"pswp__item"}),e("div",{staticClass:"pswp__item"}),e("div",{staticClass:"pswp__item"})]),e("div",{staticClass:"pswp__ui pswp__ui--hidden"},[e("div",{staticClass:"pswp__top-bar"},[e("div",{staticClass:"pswp__counter"}),e("button",{staticClass:"pswp__button pswp__button--close",attrs:{title:"Close (Esc)"}}),e("button",{staticClass:"pswp__button pswp__button--share",attrs:{title:"Share"}}),e("button",{staticClass:"pswp__button pswp__button--fs",attrs:{title:"Toggle fullscreen"}}),e("button",{staticClass:"pswp__button pswp__button--zoom",attrs:{title:"Zoom in/out"}}),e("div",{staticClass:"pswp__preloader"},[e("div",{staticClass:"pswp__preloader__icn"},[e("div",{staticClass:"pswp__preloader__cut"},[e("div",{staticClass:"pswp__preloader__donut"})])])])]),e("div",{staticClass:"pswp__share-modal pswp__share-modal--hidden pswp__single-tap"},[e("div",{staticClass:"pswp__share-tooltip"})]),e("button",{staticClass:"pswp__button pswp__button--arrow--left",attrs:{title:"Previous (arrow left)"}}),e("button",{staticClass:"pswp__button pswp__button--arrow--right",attrs:{title:"Next (arrow right)"}}),e("div",{staticClass:"pswp__caption"},[e("div",{staticClass:"pswp__caption__center"})])])])])}],w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"column is-12-mobile is-half-tablet is-2-desktop"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-image"},[e("a",{attrs:{href:"#"},on:{click:function(a){return t.openGaleria()}}},[e("figure",{staticClass:"image is-4by3"},[e("img",{attrs:{src:t.getImagen(t.mapaData.index),alt:"Placeholder image"}})])])]),e("div",{staticClass:"card-content"},[e("div",{staticClass:"media"},[e("div",{staticClass:"media-content"},[e("p",{staticClass:"title is-5"},[t._v(t._s(t.mapaData.estacion))]),e("p",{staticClass:"subtitle is-7 has-text-primary"},[t._v(t._s(t.mapaData.fase))])])]),e("div",{staticClass:"content  has-text-left"},[e("p",{staticClass:"mapa-descripcion"},[t._v(t._s(t.mapaData.descripcion))])])])])])},y=[],C={name:"AppMapa",props:["mapaData"],methods:{openGaleria:function(){console.log("open Galeria: ".concat(this.mapaData.index)),this.$emit("messageFromChild",this.mapaData.index)},getImagen:function(t){switch(t){case 0:return"https://res.cloudinary.com/djhqderty/image/upload/v1561148205/hambruna_ksutbt.jpg";case 1:return"https://res.cloudinary.com/djhqderty/image/upload/v1561148205/ajustes_militares_ak1qms.jpg";case 2:return"https://res.cloudinary.com/djhqderty/image/upload/v1561148205/movimientos_srw2ng.jpg";case 3:return"https://res.cloudinary.com/djhqderty/image/upload/v1561148205/plaga_tzex8q.jpg";default:}}}},j=C,x=(e("bd5b"),Object(p["a"])(j,w,y,!1,null,"49c8c2b2",null)),P=x.exports,k=e("394e"),q={name:"home",components:{AppMapa:P},data:function(){return{gallery:null,staticJson:k}},mounted:function(){console.log("Created")},methods:{say:function(t){this.gallery.init()},abrirGaleria:function(t){console.log("abrir la foto: ".concat(t)),this.openGallery(t)},openGallery:function(t){console.log("numeroSlide: ".concat(t));var a=document.querySelectorAll(".pswp")[0],e=[{src:"https://res.cloudinary.com/djhqderty/image/upload/v1561146043/machiavelli%201750/1750_hambruna.jpg",w:3410,h:2168},{src:"https://res.cloudinary.com/djhqderty/image/upload/v1561146039/machiavelli%201750/1750_ajustes_militares.jpg",w:3410,h:2168},{src:"https://res.cloudinary.com/djhqderty/image/upload/v1561146037/machiavelli%201750/1750_movimiento_primavera.jpg",w:3410,h:2168},{src:"https://res.cloudinary.com/djhqderty/image/upload/v1561146036/machiavelli%201750/1750_plaga.jpg",w:3410,h:2168}],s={index:t,history:!1};this.gallery=new PhotoSwipe(a,PhotoSwipeUI_Default,e,s),this.gallery.init()}}},E=q,O=(e("e125"),Object(p["a"])(E,b,g,!1,null,"bb7db954",null)),S=O.exports;s["a"].use(f["a"]);var M=new f["a"]({routes:[{path:"/",name:"home",component:S},{path:"/about",name:"about",component:function(){return e.e("about").then(e.bind(null,"d96d"))}}]});s["a"].config.productionTip=!1,new s["a"]({router:M,render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var s=e("5e27"),i=e.n(s);i.a},"5e27":function(t,a,e){},b174:function(t,a,e){},bd5b:function(t,a,e){"use strict";var s=e("5333"),i=e.n(s);i.a},e125:function(t,a,e){"use strict";var s=e("b174"),i=e.n(s);i.a}});
//# sourceMappingURL=app.68c95cc7.js.map