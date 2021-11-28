function msToString(ms) {
    return new Date(ms).toISOString().slice(14, 19)
}

function stringToMs(str) {
    return Number(str.split(':')[0]) * 60000 + Number(str.split(':')[1]) * 1000
}

function getNextTimerMode(progress) {
    let currentMode = progress[progress.length - 1]
    if (currentMode === 'workInterval') {
        let workCount = progress.filter(x => x === 'workInterval').length
        return workCount === 4 ? 'longBreak' : 'shortBreak'
    }
    else {
        return 'workInterval'
    }
}

function onTimerFinished(state) {
    state.counter = '00:00'
    state.time = 0
    state.progress.push(getNextTimerMode(state.progress))
    stopTimer(state)
}

function setupNextTimerMode(state) {
    let timerMode = state.progress[state.progress.length - 1]
    state.time = state[timerMode] * 60000
    state.counter = msToString(state.time)
}

let intervalID = null
function startTimer(state) {
    state.isTimerRunning = true
    let timeRemaining = state.time
    let startTime = Date.now()
    intervalID = setInterval(function () {
        let timeElapsed = Date.now() - startTime
        let newTime = timeRemaining - timeElapsed
        if (newTime <= 0) {
            onTimerFinished(state)
            setupNextTimerMode(state)
            return
        }
        state.time = newTime
        state.counter = msToString(newTime)
    }, 200)
}

function stopTimer(state) {
    intervalID ? clearInterval(intervalID) : {}
    state.isTimerRunning = false
}

export {
    startTimer,
    stopTimer,
    setupNextTimerMode,
}