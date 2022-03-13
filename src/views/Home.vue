<script setup>

import ProgressBar from '../components/ProgressBar.vue'
import Counter from '../components/Counter.vue'
import PlayPauseBtn from '../components/PlayPauseBtn.vue'

</script>

<template>
    <div v-if="$store.state.time === -1" class="welcome-msg">
        <p>Welcome!</p>
        <p>Go to <router-link to="/settings">Settings</router-link> to get started.</p>
    </div>
    <div v-else class="home">
        <div class="graphic">
            <ProgressBar />
        </div>
        <div class="counter">
            <Counter />
            <PlayPauseBtn />
            <router-link class="settings-link" to="/settings">Settings</router-link>
        </div>
    </div>
</template>

<style scoped>
.home {
    width: 100%;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-areas:
        "graphic"
        "counter";
}
.graphic {
    grid-area: graphic;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.counter {
    grid-area: counter;
    justify-self: center;
    padding-bottom: 20rem;
}
.settings-link {
    display: block;
    text-align: center;
    padding: 20rem;
}
.welcome-msg {
    font-size: 22rem;
    text-align: center;
    align-self: center;
    margin-top: -80rem;
}
</style>