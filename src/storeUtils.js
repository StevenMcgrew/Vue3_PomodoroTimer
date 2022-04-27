function el(idString) {
    return document.getElementById(idString)
}

function msToString(ms) {
    return new Date(ms).toISOString().slice(14, 19)
}

let titleInterval = null
function startTitleAlarm(str, delay) {
    titleInterval = setInterval(function () {
        document.title.startsWith('⏰') ?
            document.title = str
            : document.title = '⏰⏰⏰⏰⏰⏰⏰⏰⏰⏰'
    }, delay)
}

function stopTitleAlarm() {
    titleInterval ? clearInterval(titleInterval) : alert('Error:  something went wrong when trying to stop the title alarm.')
    document.title = 'Pomodoro Timer'
}

function getNextTimerMode(progress) {
    let currentMode = progress[progress.length - 1]
    if (currentMode === 'workInterval') {
        return progress.length === 7 ? 'longBreak' : 'shortBreak'
    }
    else {
        return 'workInterval'
    }
}

function formatModeToText(mode) {
    if (mode === 'workInterval') { return 'work interval' }
    if (mode === 'shortBreak') { return 'short break' }
    if (mode === 'longBreak') { return 'long break' }
}

function getAlarmText(nextMode) {
    if (nextMode === 'workInterval') { return 'Work Time' }
    if (nextMode === 'shortBreak') { return 'Short Break Time' }
    if (nextMode === 'longBreak') { return 'Long Break Time' }
}

function startOver(state) {
    stopTimer(state)
    state.isTimerInProgress = false
    state.progress = ['workInterval']
    setupNextTimerMode(state)
    state.isResetDropupVisible = false
}

function onTimerFinished(state, alarmPlayer) {
    state.counter = '00:00'
    state.time = 0
    state.progressPercent = 100

    let oldMode = state.progress[state.progress.length - 1]
    let newMode = getNextTimerMode(state.progress)
    state.progress.push(newMode)

    let oldModeText = formatModeToText(oldMode)
    let newModeText = formatModeToText(newMode)
    state.finishedMessage = `The ${oldModeText} timer has finished. Next up is a ${newModeText}.`
    state.isShowFinishedPopup = true

    let titleText = getAlarmText(newMode)
    startTitleAlarm(titleText, 500)
    if (state.prefersAlarmSound) { alarmPlayer.play() }

    stopTimer(state)
}

function setupNextTimerMode(state) {
    if (state.progress.length === 9) {
        startOver(state)
    }
    else {
        let timerMode = state.progress[state.progress.length - 1]
        state.time = state[timerMode] * 60000
        state.counter = msToString(state.time)
        state.progressPercent = 0    }
}

function stopAlarms() {
    el('alarmPlayer').pause()
    stopTitleAlarm()
}

let timerInterval = null
function startTimer(state) {
    state.isTimerRunning = true
    state.isTimerInProgress = true
    let timerMode = state.progress[state.progress.length - 1]
    let totalModeTime = state[timerMode] * 60000
    let remainingTime = state.time
    let startTime = Date.now()
    timerInterval = setInterval(function () {
        let timeElapsed = Date.now() - startTime
        let newRemainingTime = remainingTime - timeElapsed
        if (newRemainingTime <= 0) {
            onTimerFinished(state, el('alarmPlayer'))
            return
        }
        state.time = newRemainingTime
        state.counter = msToString(newRemainingTime)
        state.progressPercent = (totalModeTime - newRemainingTime) / totalModeTime * 100
    }, 200)
}

function stopTimer(state) {
    if (timerInterval) {
        clearInterval(timerInterval)
        state.isTimerRunning = false
    }
}

function isContrastOkayWithWhiteText (hexcolor) {
	hexcolor = hexcolor.slice(1) // remove the '#' at the beginning
	let r = parseInt(hexcolor.substr(0,2),16)
	let g = parseInt(hexcolor.substr(2,2),16)
	let b = parseInt(hexcolor.substr(4,2),16)
	let yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
	return (yiq >= 128) ? false : true
}

function setAppAccentColor(hexColor) {
    if (isContrastOkayWithWhiteText(hexColor)) {
        let root = document.querySelector(':root')
        root.style.setProperty("--app-accent-color", hexColor)    
    }
}

export {
    startTimer,
    stopTimer,
    startOver,
    setupNextTimerMode,
    stopAlarms,
    setAppAccentColor,
}