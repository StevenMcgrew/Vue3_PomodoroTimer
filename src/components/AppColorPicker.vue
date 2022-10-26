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
        store.commit('updateAppColor', { propName: props.id, propValue: value })
    }
})

const isColorTooLight = computed({
    get() {
        return store.state.isColorTooLight
    },
    set(value) {
        //
    }
})

</script>

<template>
    <label :for="id" class="settings-label">{{ label }}</label>
    <input :id="id" type="color" v-model="color" />
    <p :class="{ warn: isColorTooLight }">* To ensure contrast, lighter shades are not applied</p>
</template>

<style scoped>
input {
    width: 3.96875rem;
    height: 1.875rem;
}
p {
    font-size: 0.75rem;
    margin: 0;
}
.warn {
    color: red;
}
</style>