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
        store.commit('updateAppAccentColor', {
            propName: 'appAccentColor',
            propValue: store.state.appAccentColor
        })
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
    --app-accent-color: #536e7a;
    --dark-text-color: #303030;
    --light-gray-text-color: #767676;
    --text-contrast-color: #ffffff;
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

button {
    outline: none!important;
    border-style: none;
    border: white 1rem solid;
    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
    font-size: 18rem;
    border-radius: 6rem;
    background-color: var(--app-accent-color);
    color: var(--text-contrast-color);
    padding: 10px 15px 9px 15px;
    cursor: pointer;
    text-align: center;
}

a {
    color: var(--app-accent-color);
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