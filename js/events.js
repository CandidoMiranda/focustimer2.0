import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAdd,
  buttonSub,
  forest,
  rain,
  canteen,
  fireplace,
  soundOn,
  soundOff,
  lightMode,
  darkMode,
  forestVolume,
  rainVolume,
  fireplaceVolume,
  canteenVolume
} from './elements.js'

export default function Events({ controls, timer, sound }) {
  buttonPlay.addEventListener('click', event => {
    sound.pressButton()
    controls.toggleButton()
    timer.countdown()
  })

  buttonPause.addEventListener('click', event => {
    sound.pressButton()
    controls.toggleButton()
    timer.hold()
  })

  buttonStop.addEventListener('click', event => {
    sound.pressButton()
    timer.updateDisplay(minutes, '00')
    controls.resetControls()
    timer.reset()
  })

  buttonAdd.addEventListener('click', event => {
    sound.pressButton()
    timer.increaseMinutes()
  })

  buttonSub.addEventListener('click', event => {
    sound.pressButton()
    timer.decreaseMinutes()
  })

  forest.addEventListener('click', event => {
    if (forest.classList.contains('selected')) {
      forest.classList.remove('selected')
      sound.forestAudio.pause()
      return
    }
    forest.classList.add('selected')
    rain.classList.remove('selected')
    canteen.classList.remove('selected')
    fireplace.classList.remove('selected')
    sound.forestAudio.play()
    sound.rainAudio.pause()
    sound.canteenAudio.pause()
    sound.fireplaceAudio.pause()
  })

  rain.addEventListener('click', event => {
    if (rain.classList.contains('selected')) {
      rain.classList.remove('selected')
      sound.rainAudio.pause()
      return
    }
    forest.classList.remove('selected')
    rain.classList.add('selected')
    canteen.classList.remove('selected')
    fireplace.classList.remove('selected')
    sound.forestAudio.pause()
    sound.rainAudio.play()
    sound.canteenAudio.pause()
    sound.fireplaceAudio.pause()
  })

  canteen.addEventListener('click', event => {
    if (canteen.classList.contains('selected')) {
      canteen.classList.remove('selected')
      sound.canteenAudio.pause()
      return
    }
    forest.classList.remove('selected')
    rain.classList.remove('selected')
    canteen.classList.add('selected')
    fireplace.classList.remove('selected')
    sound.forestAudio.pause()
    sound.rainAudio.pause()
    sound.canteenAudio.play()
    sound.fireplaceAudio.pause()
  })

  fireplace.addEventListener('click', event => {
    if (fireplace.classList.contains('selected')) {
      fireplace.classList.remove('selected')
      sound.fireplaceAudio.pause()
      return
    }
    forest.classList.remove('selected')
    rain.classList.remove('selected')
    canteen.classList.remove('selected')
    fireplace.classList.add('selected')
    sound.forestAudio.pause()
    sound.rainAudio.pause()
    sound.canteenAudio.pause()
    sound.fireplaceAudio.play()
  })

  soundOn.addEventListener('click', event => {
    soundOn.classList.add('hide')
    soundOff.classList.remove('hide')
    sound.bgAudio.pause()
  })

  soundOff.addEventListener('click', event => {
    soundOn.classList.remove('hide')
    soundOff.classList.add('hide')
    sound.bgAudio.play()
  })

  lightMode.addEventListener('click', event => {
    controls.darkModeOnOff()
    controls.switchMode()
    sound.pressButton()
  })

  darkMode.addEventListener('click', event => {
    controls.darkModeOnOff()
    controls.switchMode()
    sound.pressButton()
  })

  forestVolume.addEventListener('input', event => {
    sound.forestAudio.volume = forestVolume.value
  })
  rainVolume.addEventListener('input', event => {
    sound.rainAudio.volume = rainVolume.value
  })
  canteenVolume.addEventListener('input', event => {
    sound.canteenAudio.volume = canteenVolume.value
  })
  fireplaceVolume.addEventListener('input', event => {
    sound.fireplaceAudio.volume = fireplaceVolume.value
  })
}
