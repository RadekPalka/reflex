const textParagraph = document.querySelector('p.text')
const stopperParagraph = document.querySelector('p.stopper')
const again = document.querySelector('p.again')

let reflexStopper
let timer
let delay
let stopper

const startAgain= ()=>{
  document.removeEventListener("keypress", showResult)
  document.removeEventListener("touchstart", showResult)
  
  again.textContent= "Naciśnij dowolny przycisk, żeby zacząć jeszcze raz"
  document.addEventListener("keypress", play)
  document.addEventListener("touchstart", play)
}

const showResult = () =>{
  stopperParagraph.textContent= ''
  const result = delay/100
    clearInterval(stopper)
    
     textParagraph.textContent= "Twoje opóźnienie to "+ (result)+ " sekund";
     startAgain()
}

const runTimer= () =>{
  textParagraph.style.color = 'red'
  stopper = setInterval(()=>{
    delay++
    console.log(delay);
  },10)
  document.addEventListener("keypress", showResult)
  document.addEventListener("touchstart", showResult)
}

const startGame = () => {
  const randomNumber = Math.random()
  reflexStopper = setTimeout(runTimer, randomNumber*10000)
}

const startStopper = () =>{
  let counter = 4
  const stopper= setInterval(()=>{
    counter--
    stopperParagraph.textContent = counter
    
    if (!counter) {
      stopperParagraph.textContent = "START"
      clearInterval(stopper)
      startGame()
    }
  },1000)
  
}
const play = () =>{
  delay =0
  textParagraph.style.color = 'chartreuse'
  again.textContent= ''
  document.removeEventListener('keypress', play)
  document.removeEventListener("touchstart", play)
  
  textParagraph.textContent = "Naciśnij dowolny przycisk jeżeli ten napis zmieni kolor";
  startStopper()
}


document.addEventListener('keypress', play);
document.addEventListener("touchstart", play);