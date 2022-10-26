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
        store.commit('updateAppColor', {
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
    <audio id="alarmPlayer" src="/Vue3_PomodoroTimer/Beep.mp3" loop></audio>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");

:root {
    --app-accent-color: #3b83b0;
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
    -webkit-text-size-adjust: 100%;
}

body {
    font-size: 1rem;
    font-family: "Varela Round", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
    color: var(--dark-text-color);
    min-height: 100vh;
    min-height: 100dvh;
    margin: 0;
}

input,
textarea,
button {
    font: inherit;
}

#app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

button {
    outline: none!important;
    border-style: none;
    border: white 0.0625rem solid;
    box-shadow: 1px 1px 7px -4px black;
    font-size: 1.125rem;
    border-radius: 0.375rem;
    background-color: var(--app-accent-color);
    color: var(--text-contrast-color);
    padding: 10px 15px 9px 15px;
    cursor: pointer;
    text-align: center;
}

a {
    color: var(--app-accent-color);
}

.settings-label {
    display: inline-block;
    width: 12.5rem;
    padding: 0.625rem 0rem;
}

.page-container {
    flex: 1;
    display: flex;
    justify-content: center;
}
</style>