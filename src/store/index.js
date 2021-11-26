import { createStore } from "vuex"

export default createStore({
    state: {
        counter: '00:00',
        showSettings: false,
        workInterval: 0,
        shortBreak: 0,
        longBreak: 0,
        isTimerRunning: false,
    },
    mutations: {
        toggleSettingsVisibility(state) {
            state.showSettings = !state.showSettings
        },
        updateTimeSetting(state, payload) {
            state[payload.propName] = payload.time
        },
        toggleTimer(state) {
            state.isTimerRunning = !state.isTimerRunning
        },
    },
    actions: {

    },
    modules: {

    },
})