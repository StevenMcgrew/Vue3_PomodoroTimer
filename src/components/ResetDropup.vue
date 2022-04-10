<script setup>


</script>

<template>
    <div class="dropup">
        <button class="dropup-btn" @click="$store.commit('toggleResetDropup')">RESET</button>
        <div v-if="$store.state.isResetDropupVisible" class="dropup-content">
            <button>Reset All</button>
            <button>Reset Current</button>
        </div>
    </div>
</template>

<style scoped>
.dropup-btn {
    background-color: white;
    color: var(--app-accent-color);
    border: 1rem solid var(--app-accent-color);
    box-shadow: none;
    width: 178rem;
}
.dropup {
    position: relative;
    display: block;
    text-align: center;
    padding-top: 20rem;
}
.dropup-content {
    position: absolute;
    bottom: 50px;
    z-index: 1;
}
</style>