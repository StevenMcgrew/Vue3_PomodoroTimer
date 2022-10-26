<script setup>

</script>

<template>
    <div class="pp-btn-container">
        <i role="button" @click="$store.commit('toggleTimer')" v-show="!$store.state.isTimerRunning" class="fa-solid fa-circle-play"></i>
        <i role="button" @click="$store.commit('toggleTimer')" v-show="$store.state.isTimerRunning" class="fa-solid fa-circle-pause"></i>
    </div>
</template>

<style scoped>
.pp-btn-container {
    display: inline;
    padding: 1.25rem 0rem 1.25rem 1.25rem;
    text-align: center;
}

i {
    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
    font-size: 4rem;
    cursor: pointer;
    color: var(--app-accent-color);
    border-radius: 50%;
}

@media only screen and (max-width: 430px) {
    .pp-btn-container {
        display: block;
        padding: 1.25rem;
    }
}
</style>