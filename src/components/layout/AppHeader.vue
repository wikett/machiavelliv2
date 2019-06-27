<template>
    <nav class="navbar is-dark is-fixed-top m-header" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a href="#/" class="navbar-item router-link-exact-active router-link-active">
                <img src="@/assets/logo-azul.png" alt="Machiavelli 1750">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">

      <a class="navbar-item" href="#/">
        La Partida
      </a>

      <a class="navbar-item" href="#/jugadores">
        Jugadores
      </a>

      <a class="navbar-item" href="#/manual">
        Manual
      </a>

    </div>

    
  </div>
</nav>
    <!-- <nav class="navbar is-fixed-top">
        <div class="navbar-brand">
            <a href="#/" class="navbar-item router-link-exact-active router-link-active">
                <img src="@/assets/logo-azul.png" alt="Machiavelli 1750"></a>
            <div data-target="navbarExampleTransparentExample" class="navbar-burger burger "><span></span> <span></span>
                <span></span></div>
        </div>
        <div id="navbarExampleTransparentExample" class="navbar-menu ">
            <div class="navbar-start">
                <a href="#/" class="navbar-item is-active router-link-active"
                    title="La Partida"><span>La Partida</span>
                </a> 
                <a href="#/jugadores" class="navbar-item"  title="Jugadores"><span>Jugadores</span></a>
                 <a href="#/manual" class="navbar-item" title="Manual"><span>Manual</span></a> 
                <a href="#/sugerencias" class="navbar-item" title="Sugerencias"><span>Sugerencias</span></a> </div>
            
        </div>
    </nav> -->
</template>


<script>
    export default {
        name: 'AppHeader'
    };
</script>

<style scoped lang="scss">
.m-header {
    border-bottom: #8080803d solid 1px;
}
.navbar.is-dark {
    background-color: #1a4365;
    color: #f5f5f5;
}
</style>
