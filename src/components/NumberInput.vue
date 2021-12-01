<script setup>

import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const props = defineProps({
    id: String,
    label: String,
    initialValue: Number,
    min: Number,
    max: Number,
})

const number = computed({
    get() {
        return store.state[props.id]
    },
    set(value) {
        store.commit('updateTimeSetting', { propName: props.id, time: value })
    }
})

// const number = computed(() => {
//     store.commit('updateTimeSetting', { propName: props.id, time: number.value })
// })

// function onInput(e) {
//     store.commit('updateTimeSetting', { propName: props.id, time: e.target.value})
// }

// on created...
// store.commit('updateTimeSetting', { propName: props.id, time: props.initialValue })

</script>

<template>
    <label :for="id">{{ label }}</label>
    <input :id="id" type="number" :min="min" :max="max" v-model="number" />
</template>

<style scoped>
label {
    display: inline-block;
    width: 150rem;
}
</style>