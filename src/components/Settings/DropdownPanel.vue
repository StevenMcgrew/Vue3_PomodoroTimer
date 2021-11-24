<script setup>

import NumberInput from './NumberInput.vue'

import { ref, computed, watchEffect } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const maxHeight = ref('0')
const dropdownPanel = ref(null)
const showSettings = computed(() => store.state.showSettings)

watchEffect(() => {
    if (showSettings.value === false) maxHeight.value = '0'
    else maxHeight.value = dropdownPanel.value.scrollHeight + 'rem'
}
// ,{ flush: 'post'}  Supposedly this is needed when watching template refs, but it is working without it.
)

</script>

<template>
    <div ref="dropdownPanel">
        <NumberInput :id="'workInterval'" :label="'Work Interval'" :initial-value="25" :min="1" :max="120" /><span>min</span><br>
        <NumberInput :id="'shortBreak'" :label="'Short break'" :initial-value="5" :min="1" :max="120" /><span>min</span><br>
        <NumberInput :id="'longBreak'" :label="'Long break'" :initial-value="30" :min="1" :max="120" /><span>min</span><br>
    </div>
</template>

<style scoped>
div {
    padding: 0 18rem;
    background-color: white;
    max-height: v-bind("maxHeight");
    overflow: hidden;
    transition: max-height 0.2s ease-out;
}
</style>