<script setup>

import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const props = defineProps({
    id: String,
    label: String,
    min: Number,
    max: Number,
})

// bind v-model="number" to the vuex store
const number = computed({
    get() {
        return store.state[props.id]
    },
    set(value) {
        store.commit('updateTimeSetting', { propName: props.id, propValue: value })
    }
})

// on created...
//store.commit('updateTimeSetting', { propName: props.id, propValue: props.initialValue })

</script>

<template>
    <label :for="id" class="settings-label">{{ label }}</label>
    <input :id="id" type="number" :min="min" :max="max" v-model="number" />
</template>

<style scoped>

</style>