<script setup>


</script>

<template>
    <div class="dropup">
        <button class="dropup-btn" @click="$store.commit('toggleResetDropup')">RESET</button>
        <div v-if="$store.state.isResetDropupVisible" class="dropup-content">
            <button class="reset-btns" @click="$store.commit('timerResetAll')">Reset All</button>
            <button class="reset-btns" @click="$store.commit('timerResetCurrent')">Reset Current</button>
        </div>
    </div>
</template>

<style scoped>
.dropup-btn {
    background-color: white;
    color: var(--app-accent-color);
    border: 0.0625rem solid var(--app-accent-color);
    box-shadow: none;
    width: 11.125rem;
}
.dropup {
    position: relative;
    display: block;
    text-align: center;
    padding-top: 1.25rem;
}
.dropup-content {
    position: absolute;
    bottom: 50px;
    z-index: 1;
    background-color: white;
    padding: 0.625rem;
    box-shadow: 1px 1px 7px -4px black;
}
.reset-btns {
    margin: 0.625rem;
}
</style>