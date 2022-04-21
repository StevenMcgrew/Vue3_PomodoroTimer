<script setup>

import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const progressWidth = computed({
    get() {
        return store.state.progressPercent
    },
    set(value) {
        //
    }
})

</script>

<template>
    <p class="progress-text"></p>
    <div class="progress-bar">
        <div class="progress" :style="{ width: progressWidth + '%' }"></div>
    </div>
</template>

<style scoped>
.progress-text {
    font-size: 20rem;
}
.progress-bar {
    width: 90%;
    height: 40rem;
    background-color: #eee;
    border-radius: 2px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
}
.progress {
    width: 0;
    height: 100%;
    background-color: orange;
}
</style>