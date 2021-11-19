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
body {
    min-height: 100vh;
    margin: 0;
}
#app {
    padding: 10px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.page-container {
    flex: 1;
    display: flex;
}
</style>