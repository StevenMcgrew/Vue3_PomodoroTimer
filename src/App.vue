<script setup>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

</script>

<template>
    <Header></Header>
        <router-view class="page-container"></router-view>
    <Footer></Footer>
</template>

<style>
body {
    min-height: 100vh;
    margin: 0;
}
#app {
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.page-container {
    flex: 1
}
</style>