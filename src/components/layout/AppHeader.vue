<template>
    <nav class="navbar is-dark is-fixed-top">
        <div class="navbar-brand">
            <a href="#/" class="navbar-item router-link-exact-active router-link-active">
                <img src="@/assets/logo-azul.png" alt="Machiavelli 1750"></a>
            <div data-target="navbarExampleTransparentExample" class="navbar-burger burger"><span></span> <span></span>
                <span></span></div>
        </div>
        <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
                <a href="#/" class="navbar-item is-active router-link-active"
                    title="La Partida"><span>La Partida</span>
                </a> <a href="#/form" class="navbar-item"
                    title="Form Inputs"><span>Jugadores</span></a> <a href="#/elements" class="navbar-item"
                    title="Elements"><span>Manual</span></a> <a href="#/components" class="navbar-item"
                    title="Components"><span>Sugerencias</span></a> <a href="#/extras" class="navbar-item"
                    title="Extras"><span>More</span></a></div>
            <div class="navbar-end"><a href="https://github.com/mubaidr/bulma-fluent" title="Github Repository"
                    target="_blank" class="navbar-item"><span class="icon"><i aria-hidden="true"
                            class="fas fa-star"></i></span> <span>Github</span></a> <a
                    href="https://raw.githubusercontent.com/mubaidr/bulma-fluent/master/css/bulma.min.css"
                    title="Download" target="_blank" class="navbar-item"><span class="icon"><i aria-hidden="true"
                            class="fas fa-download"></i></span> <span>Download</span></a></div>
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
