<script setup>

import NumberInput from '../components/NumberInput.vue'
import AppColorPicker from '../components/AppColorPicker.vue'

</script>

<template>
    <form>
        <NumberInput :min="1" :max="120" :id="'workInterval'" :label="'Work Interval'"/><span>min</span><br>
        <NumberInput :min="1" :max="120" :id="'shortBreak'" :label="'Short break'"/><span>min</span><br>
        <NumberInput :min="1" :max="120" :id="'longBreak'" :label="'Long break'"/><span>min</span><br>
        <AppColorPicker :id="'appAccentColor'" :label="'App color'"/><br>
        <router-link class="lets-go" to="/">Let's Go! -></router-link>
    </form>
</template>

<style scoped>
form {
    align-self: center;
    margin-top: -10rem;
    font-size: 20rem;
}
.lets-go {
    text-align: center;
    display: block;
    font-size: 28rem;
    padding: 20rem;
}
</style>