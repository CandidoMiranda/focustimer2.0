export default function () {
  const forestAudio = new Audio('/assets/audios/Floresta.wav')
  const rainAudio = new Audio('/assets/audios/Chuva.wav')
  const canteenAudio = new Audio('/assets/audios/Cafeteria.wav')
  const fireplaceAudio = new Audio('/assets/audios/Lareira.wav')
  const buttonPressAudio = new Audio('/assets/audios/audios_button-press.wav')
  const kitchenTimer = new Audio('/assets/audios/audios_kichen-timer.mp3')
  const bgAudio = new Audio('/assets/audios/audios_bg-audio.mp3')

  forestAudio.loop = true
  rainAudio.loop = true
  canteenAudio.loop = true
  fireplaceAudio.loop = true
  bgAudio.loop = true

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  return {
    forestAudio,
    rainAudio,
    canteenAudio,
    fireplaceAudio,
    bgAudio,
    pressButton,
    timeEnd
  }
}
