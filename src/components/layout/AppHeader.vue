<template>
    <nav class="navbar is-dark is-fixed-top">
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
    </nav>
</template>


<script>
    export default {
        name: 'AppHeader'
    };
</script>

<style scoped lang="scss">

</style>
