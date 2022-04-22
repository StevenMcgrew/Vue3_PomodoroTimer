<script setup>

import ProgressBar from '../components/ProgressBar.vue'
import Counter from '../components/Counter.vue'
import PlayPauseBtn from '../components/PlayPauseBtn.vue'
import ResetDropup from '../components/ResetDropup.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const progress = computed({
    get() {
        return store.state.progress.length
    },
    set(value) {
        //
    }
})

</script>

<template>
    <div v-if="$store.state.isFirstVisit" class="welcome-msg">
        <p>Welcome!</p>
        <p>Go to <router-link to="/settings">Settings</router-link> to get started.</p>
    </div>
    <div v-else class="home">
        <div class="graphic">
            <div>
                <div class="mode-icons-container">
                    <i class="fa-solid fa-computer" :class="{ active: progress === 1 }"></i>
                    <i class="fa-solid fa-mug-hot" :class="{ active: progress === 2 }"></i>
                    <i class="fa-solid fa-computer" :class="{ active: progress === 3 }"></i>
                    <i class="fa-solid fa-mug-hot" :class="{ active: progress === 4 }"></i>
                    <i class="fa-solid fa-computer" :class="{ active: progress === 5 }"></i>
                    <i class="fa-solid fa-mug-hot" :class="{ active: progress === 6 }"></i>
                    <i class="fa-solid fa-computer" :class="{ active: progress === 7 }"></i>
                    <i class="fa-solid fa-person-walking" :class="{ active: progress === 8 }"></i>
                </div>
            </div>
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
.mode-icons-container {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 30rem;
}
i {
    line-height: 28px;
    padding: 3rem 5rem;
    margin: 0 5rem;
    color: var(--app-accent-color);
    font-size: 22rem;
    border-radius: 8rem;
}
.active {
    box-shadow: orange 0rem 0rem 4px 5px;
}
.graphic > div:first-of-type {
    width: 90%;
}
@media only screen and (min-width: 900px) {
    i {
        line-height: 40rem;
        font-size: 34rem;
    }
}
</style>