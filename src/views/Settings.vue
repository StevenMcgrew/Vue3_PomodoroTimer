<script setup>

import NumberInput from '../components/NumberInput.vue'
import AppColorPicker from '../components/AppColorPicker.vue'
import AlarmSoundToggle from '../components/AlarmSoundToggle.vue'
import { useStore } from 'vuex'
const store = useStore()

store.commit('setInitialTimer')
store.commit('setFirstVisitStatus', { propValue: false })

</script>

<template>
    <form>
        <NumberInput :min="1" :max="120" :id="'workInterval'" :label="'Work Interval'"/><span>min</span><br>
        <NumberInput :min="1" :max="120" :id="'shortBreak'" :label="'Short break'"/><span>min</span><br>
        <NumberInput :min="1" :max="120" :id="'longBreak'" :label="'Long break'"/><span>min</span><br>
        <AlarmSoundToggle :id="'prefersAlarmSound'" :label="'Alarm Sound'" /><br>
        <AppColorPicker :id="'appAccentColor'" :label="'App color'"/><br>
        <router-link class="lets-go" to="/">LET'S GO!</router-link>
        <button class="reset-btn" @click="$store.commit('restoreDefaultSettings')">RESTORE DEFAULTS</button>
    </form>
</template>

<style scoped>
form {
    align-self: center;
    margin-top: -10rem;
    font-size: 20rem;
}
.lets-go {
    text-decoration: none;
    outline: none!important;
    border-style: none;
    border: white 1rem solid;
    box-shadow: 1px 1px 7px -3px black;
    border-radius: 6rem;
    background-color: var(--app-accent-color);
    color: var(--text-contrast-color);
    padding: 10px 15px 9px 15px;
    cursor: pointer;
    margin: 0 auto;
    display: block;
    text-align: center;
    width: 90%;
    font-size: 18rem;
}
.reset-btn {
    display: block;
    margin: 0 auto;
    margin-top: 20rem;
    width: 90%;
    background-color: white;
    color: var(--app-accent-color);
    border: 1rem solid var(--app-accent-color);
}
</style>