<script setup>

import { onMounted } from "vue"
import { useStore } from "vuex"
const store = useStore()

onMounted(() => {
    store.commit('setInitialTimer')
})

</script>


<template>
    <span>{{ store.state.counter }}</span>
</template>

<style scoped>
span {
    font-family: 'Lucida Console', 'Courier New', Courier, monospace;
    font-size: 100rem;
    font-weight: 300;
}
</style>