<script setup>

</script>

<template>
    <div role="button" class="play-pause-btn" @click="$store.commit('toggleTimer')">
        <i v-show="!$store.state.isTimerRunning" class="fas fa-play-circle"></i>
        <i v-show="$store.state.isTimerRunning" class="fas fa-pause-circle"></i>
    </div>
</template>

<style scoped>
.play-pause-btn {
    display: inline;
    font-size: 58rem;
    padding: 20rem;
    cursor: pointer;
    color: rgb(84 110 122);
}
</style>