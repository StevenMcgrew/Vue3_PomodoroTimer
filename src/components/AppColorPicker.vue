<script setup>

import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const props = defineProps({
    id: String,
    label: String,
})

// bind v-model="color" to the vuex store
const color = computed({
    get() {
        return store.state[props.id]
    },
    set(value) {
        store.commit('updateAppAccentColor', { propName: props.id, propValue: value })
    }
})

</script>

<template>
    <label :for="id">{{ label }}</label>
    <input :id="id" type="color" v-model="color" />
</template>

<style scoped>
label {
    display: inline-block;
    width: 150rem;
    padding: 10rem 0rem;
}
input {
    width: 63.5rem;
    height: 30rem;
}
</style>