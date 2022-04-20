import { createStore } from "vuex"
import { startTimer, stopTimer, startOver, setupNextTimerMode, stopAlarms, setAppAccentColor } from '../storeUtils.js'

export default createStore({
    state: {
        counter: '25:00',
        time: 0,
        workInterval: 25,
        shortBreak: 5,
        longBreak: 30,
        isTimerRunning: false,
        isTimerInProgress: false,
        isShowFinishedPopup: false,
        isResetDropupVisible: false,
        isFirstVisit: true,
        prefersAlarmSound: false,
        progress: ['workInterval'],
        finishedMessage: '',
        appAccentColor: '#536e7a',
    },
    mutations: {
        setInitialTimer(state) {
            setupNextTimerMode(state)
        },
        setFirstVisitStatus(state, payload) {
            state.isFirstVisit = payload.propValue
        },
        updateTimeSetting(state, payload) {
            state[payload.propName] = payload.propValue
            state.isTimerInProgress ? {} : setupNextTimerMode(state)
        },
        updateAppAccentColor(state, payload) {
            state[payload.propName] = payload.propValue
            setAppAccentColor(payload.propValue)
        },
        toggleAlarmSound(state) {
            state.prefersAlarmSound = !state.prefersAlarmSound
        },
        toggleTimer(state) {
            state.isTimerRunning ? stopTimer(state) : startTimer(state)
        },
        toggleResetDropup(state) {
            state.isResetDropupVisible = !state.isResetDropupVisible
        },
        prepareNextTimerMode(state) {
            stopAlarms()
            state.isShowFinishedPopup = false
            setupNextTimerMode(state)
        },
        timerResetCurrent(state) {
            stopTimer(state)
            let currentMode = state.progress[state.progress.length - 1]
            this.commit('updateTimeSetting', { propName: currentMode, propValue: state[currentMode] })
            setupNextTimerMode(state)
            state.isResetDropupVisible = false
        },
        timerResetAll(state) {
            startOver(state)
        },
        restoreDefaultSettings(state) {
            this.commit('updateTimeSetting', { propName: 'workInterval', propValue: 25 })
            this.commit('updateTimeSetting', { propName: 'shortBreak', propValue: 5 })
            this.commit('updateTimeSetting', { propName: 'longBreak', propValue: 30 })
            state.prefersAlarmSound = false
            this.commit('updateAppAccentColor', { propName: 'appAccentColor', propValue: '#536e7a'})
        },
    },
    actions: {

    },
    modules: {

    },
})