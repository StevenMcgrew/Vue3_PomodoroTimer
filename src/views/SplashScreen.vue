<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const router = useRouter()

function isWorkIntervalSet() {
    return store.state.workInterval
}

function goToHomeOrSettings() {
    console.log("isSet:  " + isWorkIntervalSet() + 'amount:  ' + store.state.workInterval)
    isWorkIntervalSet() ? router.push('/home') : router.push('/settings')
}

setTimeout(function() {
    goToHomeOrSettings()
}, 2000)

</script>

<template>
    <div class="splash-screen">
        <p class="splash-title">Pomodoro Timer</p>
        <p class="splash-loader">Loading...</p>
    </div>
</template>

<style scoped>
.splash-screen {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: var(--app-primary-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}
.splash-title {
    font-size: 40rem;
}
.splash-loader {
    font-size: 20rem;
}
</style>