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

let intervalID = null
function startTimer(state) {
    let timerMode = state.progress[state.progress.length - 1]
    let modeTimeAmount = state[timerMode] * 60000
    console.log(state.counter)
    console.log(state.time)
    if (state.counter === '00:00') {
        console.log('state.counter is 00:00')
        state.time = modeTimeAmount
        state.counter = msToString(state.time)
    }
    state.isTimerRunning = true
    let startTime = Date.now()

    intervalID = setInterval(function () {
        let elapsed = Date.now() - startTime
        let newTime = modeTimeAmount - elapsed
        if (newTime <= 0) {
            state.counter = '00:00'
            state.time = 0
            state.progress.push(getNextTimerMode(state.progress))
            stopTimer()
        }
        state.time = newTime
        state.counter = msToString(newTime)

    }, 200)
}

function stopTimer(state) {
    clearInterval(intervalID)
    state.isTimerRunning = false
}

export {
    startTimer,
    stopTimer,
}