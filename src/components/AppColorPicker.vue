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
    <label :for="id" class="settings-label">{{ label }}</label>
    <input :id="id" type="color" v-model="color" />
    <p>* To ensure contrast, lighter shades are not applied</p>
</template>

<style scoped>
input {
    width: 63.5rem;
    height: 30rem;
}
p {
    font-size: 12rem;
    margin: 0;
}
</style>