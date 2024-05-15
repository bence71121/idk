let play = document.getElementById("play")

function playMusic() {
    let audio = new Audio("song/pedro.mp3");
    audio.play()
}

play.addEventListener("click", playMusic);