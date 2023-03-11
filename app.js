const audio = document.createElement("audio")
const audioPlay = document.querySelector(".play")
const audioPause = document.querySelector(".pause")

audio.src = "audio/I-Am-Just-A-Freak.mp3"
audio.preload = "metadata"
audio.loop = true
document.body.appendChild(audio)

audioPlay.addEventListener("click", () =>{
    audio.play()
    document.querySelector(".play").classList.toggle("hide")
    document.querySelector(".pause").classList.toggle("hide")
})
audioPause.addEventListener("click", () =>{
    audio.pause()
    document.querySelector(".play").classList.toggle("hide")
    document.querySelector(".pause").classList.toggle("hide")
})