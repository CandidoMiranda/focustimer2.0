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
  soundOff
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
    sound.forestAudio.play()
    sound.rainAudio.pause()
    sound.canteenAudio.pause()
    sound.fireplaceAudio.pause()
  })

  rain.addEventListener('click', event => {
    sound.forestAudio.pause()
    sound.rainAudio.play()
    sound.canteenAudio.pause()
    sound.fireplaceAudio.pause()
  })

  canteen.addEventListener('click', event => {
    sound.forestAudio.pause()
    sound.rainAudio.pause()
    sound.canteenAudio.play()
    sound.fireplaceAudio.pause()
  })

  fireplace.addEventListener('click', event => {
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
}
