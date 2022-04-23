<script setup>

import ProgressBar from '../components/ProgressBar.vue'
import Counter from '../components/Counter.vue'
import PlayPauseBtn from '../components/PlayPauseBtn.vue'
import ResetDropup from '../components/ResetDropup.vue'
import ModeIconBar from '../components/ModeIconBar.vue'

</script>

<template>
    <div v-if="$store.state.isFirstVisit" class="welcome-msg">
        <p>Welcome!</p>
        <p>Go to <router-link to="/settings">Settings</router-link> to get started.</p>
    </div>
    <div v-else class="home">
        <div class="graphic">
            <ModeIconBar />
            <ProgressBar />
        </div>
        <div class="counter">
            <Counter />
            <PlayPauseBtn />
            <ResetDropup />
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
.welcome-msg {
    font-size: 22rem;
    text-align: center;
    align-self: center;
    margin-top: -80rem;
}
</style>