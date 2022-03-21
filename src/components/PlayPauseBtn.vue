<script setup>

</script>

<template>
    <div class="pp-btn-container">
        <i role="button" @click="$store.commit('toggleTimer')" v-show="!$store.state.isTimerRunning" class="fas fa-play-circle"></i>
        <i role="button" @click="$store.commit('toggleTimer')" v-show="$store.state.isTimerRunning" class="fas fa-pause-circle"></i>
    </div>
</template>

<style scoped>
.pp-btn-container {
    display: inline;
    padding: 20rem 0rem 20rem 20rem;
    text-align: center;
}

i {
    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
    font-size: 64rem;
    cursor: pointer;
    color: var(--app-accent-color);
    border-radius: 50%;
}

@media only screen and (max-width: 430px) {
    .pp-btn-container {
        display: block;
        padding: 20rem;
    }
}
</style>