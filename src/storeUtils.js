function el(idString) {
    return document.getElementById(idString)
}

function msToString(ms) {
    return new Date(ms).toISOString().slice(14, 19)
}

function stringToMs(str) {
    return Number(str.split(':')[0]) * 60000 + Number(str.split(':')[1]) * 1000
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
        let workIntervalCount = progress.filter(x => x === 'workInterval').length
        return workIntervalCount === 4 ? 'longBreak' : 'shortBreak'
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

function onTimerFinished(state, alarmPlayer) {
    state.counter = '00:00'
    state.time = 0
    state.isTimerInProgress = false

    let oldTimerMode = state.progress[state.progress.length - 1]
    let newTimerMode = getNextTimerMode(state.progress)
    state.progress.push(newTimerMode)

    let previousMode = formatModeToText(oldTimerMode)
    let nextMode = formatModeToText(newTimerMode)
    state.finishedMessage = `The ${previousMode} timer has finished. Next up is a ${nextMode}.`
    state.isShowFinishedPopup = true

    let alarmText = getAlarmText(newTimerMode)
    if (state.prefersSoundAlarm) { alarmPlayer.play() }
    if (state.prefersTitleAlarm) { startTitleAlarm(alarmText, 500) }

    stopTimer(state)
}

function stopAlarms() {
    el('alarmPlayer').pause()
    stopTitleAlarm()
}

function setupNextTimerMode(state) {
    let timerMode = state.progress[state.progress.length - 1]
    state.time = state[timerMode] * 60000
    state.counter = msToString(state.time)
}

let timerInterval = null
function startTimer(state) {
    state.isTimerRunning = true
    state.isTimerInProgress = true
    let timeRemaining = state.time
    let startTime = Date.now()
    timerInterval = setInterval(function () {
        let timeElapsed = Date.now() - startTime
        let newTime = timeRemaining - timeElapsed
        if (newTime <= 0) {
            onTimerFinished(state, el('alarmPlayer'))
            return
        }
        state.time = newTime
        state.counter = msToString(newTime)
    }, 200)
}

function stopTimer(state) {
    if (timerInterval) {
        clearInterval(timerInterval)
        state.isTimerRunning = false
    }
    else {
        alert('Error:  something went wrong when trying to stop the timer.')
    }
}

function getTextContrastColor (hexcolor){
	if (hexcolor.slice(0, 1) === '#') { hexcolor = hexcolor.slice(1) }
    if (hexcolor.length > 6) { hexcolor.length = 6 }
	if (hexcolor.length === 3) { hexcolor = hexcolor.split('').map(function (hex) { return hex + hex }).join('')}
	let r = parseInt(hexcolor.substr(0,2),16)
	let g = parseInt(hexcolor.substr(2,2),16)
	let b = parseInt(hexcolor.substr(4,2),16)
	let yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
	return (yiq >= 128) ? '#303030' : '#ffffff'; // returns black or white
}

function isContrastOkayWithWhiteText (hexcolor) {
	hexcolor = hexcolor.slice(1) // remove the '#' at the beginning
	let r = parseInt(hexcolor.substr(0,2),16)
	let g = parseInt(hexcolor.substr(2,2),16)
	let b = parseInt(hexcolor.substr(4,2),16)
	let yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
	return (yiq >= 128) ? false : true
}

function setAppColors(hexColor) {
    if (isContrastOkayWithWhiteText(hexColor)) {
        let root = document.querySelector(':root')
        root.style.setProperty("--app-accent-color", hexColor)    
    }
}

export {
    startTimer,
    stopTimer,
    setupNextTimerMode,
    stopAlarms,
    setAppColors,
}