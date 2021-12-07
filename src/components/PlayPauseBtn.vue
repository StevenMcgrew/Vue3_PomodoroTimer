<script setup>

import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const isTimerRunning = computed(() => store.state.isTimerRunning)

</script>

<template>
    <div role="button" class="play-pause-btn" @click="store.commit('toggleTimer')">
        <i v-show="!isTimerRunning" class="fas fa-play-circle"></i>
        <i v-show="isTimerRunning" class="fas fa-pause-circle"></i>
    </div>
</template>

<style scoped>
.play-pause-btn {
    display: inline;
    font-size: 58rem;
}
</style>