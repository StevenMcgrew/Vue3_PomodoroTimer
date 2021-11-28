<script setup>

import Settings from "../components/Settings/Settings.vue"
import Counter from "../components/Counter.vue"
import PlayPauseBtn from "../components/PlayPauseBtn.vue"

</script>

<template>
    <div class="home">
        <Settings class="settings" />

        <div class="counter">
            <Counter />
            <PlayPauseBtn />
        </div>
    </div>
</template>

<style scoped>
.home {
    width: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "settings"
        "graphic"
        "counter";
}
.counter {
    grid-area: counter;
    justify-self: flex-end;
}
.settings {
    grid-area: settings;
}
</style>