export default function Controls({ buttonPlay, buttonPause }) {
  function toggleButton() {
    buttonPlay.classList.toggle('hide')
    buttonPause.classList.toggle('hide')
  }

  function resetControls() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  return { toggleButton, resetControls }
}
