import { createStore } from "vuex"
import { startTimer, stopTimer, setupNextTimerMode } from '../storeUtils.js'

export default createStore({
    state: {
        counter: '00:00',
        time: 0,
        workInterval: 0,
        shortBreak: 0,
        longBreak: 0,
        isTimerRunning: false,
        isTimerInProgress: false,
        progress: ['workInterval'],
        doesUserWantAlarm: true,
        doesUserWantNotify: true,
        finishedText: '',
        isShowFinishedPopup: false,
    },
    mutations: {
        setInitialTimer(state) {
            setupNextTimerMode(state)
        },
        updateTimeSetting(state, payload) {
            state[payload.propName] = payload.propValue
            state.isTimerInProgress ? {} : setupNextTimerMode(state)
        },
        toggleTimer(state) {
            state.isTimerRunning ? stopTimer(state) : startTimer(state)
        },
    },
    actions: {

    },
    modules: {

    },
})