<script setup>

import NumberInput from '../components/NumberInput.vue'

</script>

<template>
    <form>
        <NumberInput :min="1" :max="120" :initial-value="25" :id="'workInterval'" :label="'Work Interval'"/><span>min</span><br>
        <NumberInput :min="1" :max="120" :initial-value="5" :id="'shortBreak'" :label="'Short break'"/><span>min</span><br>
        <NumberInput :min="1" :max="120" :initial-value="30" :id="'longBreak'" :label="'Long break'"/><span>min</span><br>
    </form>
</template>

<style scoped>

</style>