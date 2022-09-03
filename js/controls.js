export default function Controls({
  buttonPlay,
  buttonPause,
  lightMode,
  darkMode,
  html
}) {
  function toggleButton() {
    buttonPlay.classList.toggle('hide')
    buttonPause.classList.toggle('hide')
  }

  function resetControls() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function darkModeOnOff() {
    lightMode.classList.toggle('hide')
    darkMode.classList.toggle('hide')
  }

  function switchMode() {
    html.classList.toggle('dark-mode')
  }

  return { toggleButton, resetControls, darkModeOnOff, switchMode }
}
