<script setup>

import NumberInput from './NumberInput.vue'

import { ref, computed, watchEffect } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const maxHeight = ref('0')
const dropdownPanel = ref(null)
const showSettings = computed(() => store.state.showSettings)

watchEffect(() => {
    if (showSettings.value === false) {
        maxHeight.value = '0'
    }
    else {
        maxHeight.value = dropdownPanel.value.scrollHeight + 'px'
    }
}
// ,{ flush: 'post'}  Supposedly this is needed when watching template refs, but it is working without it for now.
)

</script>

<template>
    <div ref="dropdownPanel">
        <NumberInput :id="'workInterval'" :label="'Work Interval'" :default-number="25" /><br>
        <NumberInput :id="'shortBreak'" :label="'Short break'" :default-number="5" /><br>
        <NumberInput :id="'longBreak'" :label="'Long break'" :default-number="30" /><br>
    </div>
</template>

<style scoped>
div {
    padding: 0 18px;
    background-color: white;
    max-height: v-bind("maxHeight");
    overflow: hidden;
    transition: max-height 0.2s ease-out;
}
</style>