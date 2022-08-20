// Controls
const playTimerButton = document.querySelector('#play')
const pauseTimerButton = document.querySelector('#pause')
const stopTimerButton = document.querySelector('#stop')
const addMinutesTimerButton = document.querySelector('#add-minutes')
const subtractMinutesTimerButton = document.querySelector('#sub-minutes')

// Timer HTML elements
const minutesDisplay = document.querySelector('#minutes')
const secondsDisplay = document.querySelector('#seconds')

// Initial minutes
let minutes = minutesDisplay.textContent

// timerTimeOut to pause
let timerTimeOut

// click events
playTimerButton.addEventListener('click', event => {
  togglePlayPauseButton()
  countdown()
})

pauseTimerButton.addEventListener('click', event => {
  togglePlayPauseButton()
  clearTimeout(timerTimeOut)
})

stopTimerButton.addEventListener('click', event => {
  updateTimerDisplay(minutes, '00')
  resetControls()
  resetTimer()
})

addMinutesTimerButton.addEventListener('click', event => {
  increaseMinutes()
})

subtractMinutesTimerButton.addEventListener('click', event => {
  decreaseMinutes()
})

// functions

function increaseMinutes() {
  let oldMinutes = Number(minutesDisplay.textContent)
  updateTimerDisplay(Number(oldMinutes + 5), Number(secondsDisplay.textContent))
}

function decreaseMinutes() {
  let oldMinutes = Number(minutesDisplay.textContent)

  if (Number(oldMinutes - 5) < 0) {
    resetTimer()
    resetControls()
  } else {
    updateTimerDisplay(
      Number(oldMinutes - 5),
      Number(secondsDisplay.textContent)
    )
  }
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function togglePlayPauseButton() {
  playTimerButton.classList.toggle('hide')
  pauseTimerButton.classList.toggle('hide')
}

function resetControls() {
  playTimerButton.classList.remove('hide')
  pauseTimerButton.classList.add('hide')
}

function resetTimer() {
  clearTimeout(timerTimeOut)
  updateTimerDisplay(minutes, '0')
}

function countdown() {
  timerTimeOut = setTimeout(() => {
    let newSeconds = Number(secondsDisplay.textContent)
    let newMinutes = Number(minutesDisplay.textContent)

    if (newSeconds <= 0 && newMinutes <= 0) {
      togglePlayPauseButton()
      updateTimerDisplay(minutes, '00')
      return
    }

    if (newSeconds <= 0) {
      newSeconds = 60
      --newMinutes
    }

    updateTimerDisplay(newMinutes, newSeconds - 1)

    countdown()
  }, 1000)
}
