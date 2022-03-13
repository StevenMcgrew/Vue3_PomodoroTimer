<script setup>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import FinishedPopup from './components/FinishedPopup.vue'
import { useStore } from 'vuex'
const store = useStore()

function subscribeToSavingState() {
    store.subscribe((mutation, state) => {
        localStorage.setItem('state', JSON.stringify(state))
    })
}

function restoreStateIfAvaiable() {
    if (localStorage.getItem('state')) {
        store.replaceState(
            Object.assign(store.state, JSON.parse(localStorage.getItem('state')))
        )
        // directly set the --app-primary-color css variable until we find a way to do it the vue way.
        let DOMroot = document.querySelector(':root')
        DOMroot.style.setProperty("--app-primary-color", store.state.appPrimaryColor)
    }
}

function onAppStartUp() {
    subscribeToSavingState()
    restoreStateIfAvaiable()
}

onAppStartUp()

</script>

<template>
    <Header></Header>
    <div class="page-container">
        <router-view v-slot="{ Component }">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </router-view>
    </div>
    <Footer></Footer>
    <FinishedPopup></FinishedPopup>
    <audio id="alarmPlayer" src="/Beep.mp3" loop></audio>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");

:root {
    --app-primary-color: #536e7a;
    --dark-text-color: #303030;
    --light-text-color: #767676;
    --white-text-color: #ffffffde;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

html {
    font-size: 0.0625rem;
}

body {
    font-size: 16rem;
    font-family: "Varela Round", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
    color: var(--dark-text-color);
    min-height: 100vh;
    margin: 0;
}

input,
textarea,
button {
    font: inherit;
}

a {
    color: var(--app-primary-color);
}

#app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.page-container {
    flex: 1;
    display: flex;
    justify-content: center;
}
</style>