import Sound from './sounds.js'
import Timer from './timer.js'
import Controls from './controls.js'
import Events from './events.js'
import {
  buttonPlay,
  buttonPause,
  minutesDisplay,
  secondsDisplay
} from './elements.js'

const controls = Controls({ buttonPlay, buttonPause })

const timer = Timer({
  secondsDisplay,
  minutesDisplay,
  resetControls: controls.resetControls
})

const sound = Sound()

Events({ timer, controls, sound })
