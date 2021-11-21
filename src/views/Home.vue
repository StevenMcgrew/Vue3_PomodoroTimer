<script setup>

import Settings from "../components/Settings/Settings.vue"
import Counter from "../components/Counter.vue"

</script>

<template>
    <div class="home">
        <Settings class="settings"/>
        <Counter class="counter"/>
    </div>
</template>

<style scoped>
.home {
    width: 100%;
    display: grid;
    grid-template-rows: 20px 1fr 20px;
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