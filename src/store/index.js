import { createStore } from "vuex"
import { startTimer, stopTimer, setupNextTimerMode, stopAlarms } from '../storeUtils.js'

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
        prefersSoundAlarm: true,
        prefersTitleAlarm: true,
        finishedText: '',
        isShowFinishedPopup: false,
        appPrimaryColor: '#536e7a',
    },
    mutations: {
        setInitialTimer(state) {
            setupNextTimerMode(state)
        },
        updateTimeSetting(state, payload) {
            state[payload.propName] = payload.propValue
            state.isTimerInProgress ? {} : setupNextTimerMode(state)
        },
        updateAppPrimaryColor(state, payload) {
            state[payload.propName] = payload.propValue
            // directly set the --app-primary-color css variable until we find a way to do it the vue way.
            let DOMroot = document.querySelector(':root')
            DOMroot.style.setProperty("--app-primary-color", payload.propValue)
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