<script setup>

import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const isTimerRunning = computed(() => store.state.isTimerRunning)

</script>

<template>
    <div role="button" class="start-stop-btn" @click="store.commit('toggleTimer')">
        <i v-show="!isTimerRunning" class="far fa-play-circle"></i>
        <i v-show="isTimerRunning" class="far fa-pause-circle"></i>
    </div>
</template>

<style scoped>
.start-stop-btn {
    display: inline;
}
</style>