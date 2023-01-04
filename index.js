let input = document.querySelector('input')
let player = document.querySelector('.player')
let button = document.querySelector('button')

function playVideo() {
  player.innerHTML = input.value
}

button.addEventListener('click', playVideo)