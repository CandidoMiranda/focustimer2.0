import Sounds from './sounds.js'

export default function Timer({
  secondsDisplay,
  minutesDisplay,
  resetControls
}) {
  let timerTimeOut
  let minutes = minutesDisplay.textContent

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function reset() {
    hold()
    updateDisplay(minutes, '0')
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  function increaseMinutes() {
    let oldMinutes = Number(minutesDisplay.textContent)
    updateDisplay(Number(oldMinutes + 5), Number(secondsDisplay.textContent))
  }

  function decreaseMinutes() {
    let oldMinutes = Number(minutesDisplay.textContent)

    if (Number(oldMinutes - 5) < 0) {
      reset()
      resetControls()
    } else {
      updateDisplay(Number(oldMinutes - 5), Number(secondsDisplay.textContent))
    }
  }

  function countdown() {
    timerTimeOut = setTimeout(() => {
      let newSeconds = Number(secondsDisplay.textContent)
      let newMinutes = Number(minutesDisplay.textContent)

      if (newSeconds <= 0 && newMinutes <= 0) {
        resetControls()
        updateDisplay(minutes, '00')
        Sounds().timeEnd()
        return
      }

      if (newSeconds <= 0) {
        newSeconds = 2
        --newMinutes
      }

      updateDisplay(newMinutes, newSeconds - 1)

      countdown()
    }, 1000)
  }

  return {
    countdown,
    hold,
    updateDisplay,
    reset,
    increaseMinutes,
    decreaseMinutes
  }
}
