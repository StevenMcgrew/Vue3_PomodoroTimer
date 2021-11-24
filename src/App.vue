<script setup>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

</script>

<template>
    <Header></Header>
    <div class="page-container">
        <router-view></router-view>
    </div>
    <Footer></Footer>
</template>

<style>
*, *::before, *::after {
  box-sizing: border-box;
}
html {
    font-size: 0.0625rem;
}
body {
    font-size: 16rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    min-height: 100vh;
    margin: 0;
}
input, textarea, button {
    font: inherit;
}
#app {
    padding: 10rem;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.page-container {
    flex: 1;
    display: flex;
}
</style>