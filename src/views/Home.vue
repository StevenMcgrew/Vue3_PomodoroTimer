<script setup>

import ProgressBar from '../components/ProgressBar.vue'
import Counter from '../components/Counter.vue'
import PlayPauseBtn from '../components/PlayPauseBtn.vue'

</script>

<template>
    <div class="home">
        <div class="graphic">
            <ProgressBar />
        </div>
        <div class="counter">
            <Counter />
            <PlayPauseBtn />
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
</style>