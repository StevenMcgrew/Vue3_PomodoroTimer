<script setup>

import { useStore } from 'vuex'
const store = useStore()

const props = defineProps({
    id: String,
    label: String,
    initialValue: Number,
    min: Number,
    max: Number,
})

function onInput(e) {
    store.commit('updateTimeSetting', { propName: props.id, time: e.target.value})
}

// on created...
store.commit('updateTimeSetting', { propName: props.id, time: props.initialValue})

</script>

<template>
    <label :for="id">{{ label }}</label>
    <input
        :id="id"
        type="number"
        :min="min"
        :max="max"
        :value="store.state[id]"
        @input="onInput($event)"
    />
</template>

<style scoped>
label {
    display: inline-block;
    width: 150rem;
}
</style>