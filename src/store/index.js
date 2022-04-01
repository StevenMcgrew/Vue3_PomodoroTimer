import { createStore } from "vuex"
import { startTimer, stopTimer, setupNextTimerMode, stopAlarms, setAppColors } from '../storeUtils.js'

export default createStore({
    state: {
        counter: '25:00',
        time: -1,
        workInterval: 25,
        shortBreak: 5,
        longBreak: 30,
        isTimerRunning: false,
        isTimerInProgress: false,
        progress: ['workInterval'],
        prefersAlarmSound: false,
        finishedMessage: '',
        isShowFinishedPopup: false,
        appAccentColor: '#536e7a',
    },
    mutations: {
        setInitialTimer(state) {
            setupNextTimerMode(state)
        },
        updateTimeSetting(state, payload) {
            state[payload.propName] = payload.propValue
            state.isTimerInProgress ? {} : setupNextTimerMode(state)
        },
        updateAppAccentColor(state, payload) {
            state[payload.propName] = payload.propValue
            setAppColors(payload.propValue)
        },
        toggleAlarmSound(state) {
            state.prefersAlarmSound = !state.prefersAlarmSound
        },
        toggleTimer(state) {
            state.isTimerRunning ? stopTimer(state) : startTimer(state)
        },
        prepareNextTimerMode(state) {
            stopAlarms()
            state.isShowFinishedPopup = false
            setupNextTimerMode(state)
        },
    },
    actions: {

    },
    modules: {

    },
})