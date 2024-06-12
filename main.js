const mensagens = [
  "Ofereça teu sorriso àquele que não tem forças para sorrir.",
  "Se alguém não sorri, presenteie-lhe o teu sorriso sem hesitar.",
  "Quando alguém não pode sorrir, compartilhe o teu sorriso com ele.",
  "Dê teu sorriso àquele que não pode encontrar o próprio.",
  "Se alguém não consegue sorrir, sorria em seu lugar por um momento.",
  "Quando o sorriso falha, empreste-lhe o brilho do teu próprio sorriso.",
  "Aquele que não sorri precisa do teu sorriso mais do que imagina.",
  "Quando o cansaço rouba o sorriso, ofereça o teu em troca.",
  "Se alguém não pode sorrir, compartilhe tua luz através de um sorriso.",
  "Em tempos de cansaço, presenteie teu sorriso àquele que não pode sorrir."
];

let msg = Math.round(Math.random() * mensagens.length)

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const image = screen1.querySelector("img")
const btn = screen2.querySelector(".btn")
const mensagem = screen2.querySelector("p")

document.addEventListener('keydown', handleBtnEnter)

image.addEventListener("click", function () {
  toggleScreens()
  toggleMenssage()
})

btn.addEventListener("click", toggleScreens)

function toggleScreens() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function toggleMenssage() {
  msg = Math.floor(Math.random() * mensagens.length)
  mensagem.innerHTML = mensagens[msg]
}

function handleBtnEnter(e) {
  if (e.key == 'Enter' && screen1.classList.contains("hide")) {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
  }
}