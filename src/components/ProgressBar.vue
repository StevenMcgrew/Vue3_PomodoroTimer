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
    <div class="progress-bar">
        <div class="progress" :style="{ width: progressWidth + '%' }"></div>
    </div>
</template>

<style scoped>
.progress-bar {
    width: 90%;
    height: 40rem;
    background-color: #eee;
    border-radius: 6rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
    border: 2px solid var(--app-accent-color);
}
.progress {
    width: 0;
    height: 100%;
    background-color: orange;
    border-radius: 4rem;
}
@media only screen and (max-width: 900px) {
    .progress {
        height: 21rem;
    }
    .progress-bar {
        height: 25rem;
    }
}
</style>