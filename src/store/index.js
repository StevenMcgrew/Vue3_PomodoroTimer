import { createStore } from "vuex"
import { startTimer, stopTimer, setupNextTimerMode } from '../utils.js'

export default createStore({
    state: {
        counter: '00:00',
        time: 0,
        showSettings: false,
        workInterval: 0,
        shortBreak: 0,
        longBreak: 0,
        isTimerRunning: false,
        progress: ['workInterval'],
    },
    mutations: {
        setInitialTimer(state) {
            setupNextTimerMode(state)
        },
        toggleSettingsVisibility(state) {
            state.showSettings = !state.showSettings
        },
        updateTimeSetting(state, payload) {
            state[payload.propName] = payload.time
        },
        toggleTimer(state) {
            if (state.isTimerRunning) {
                stopTimer(state)
            }
            else {
                startTimer(state)
            }
        },
    },
    actions: {

    },
    modules: {

    },
})