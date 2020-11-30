
//New Year date - now = dif date. 
const button = () => {
    console.log('k were good')
    document.getElementById('button').innerHTML = 'K we\'re good'
}

const countDown = document.getElementById('countDown')
const text = document.getElementsByClassName('text')

const now = Date.now()
const newYears = new Date(2021, 0, 1);
let dif = newYears.getTime() - now;

let isMute = false

const checkMute = () => {
    console.log('isMute =' + isMute)
    }


const Mute = () => {
    isMute = true
    prevsong.load()
}

setInterval(checkMute, 3000) 

function count() {
    dif -= 1000; 
    const d = Math.floor(dif / 1000 / 60 / 60 /24)
    const h = Math.floor((dif / 1000 / 60 / 60) % 24)
    const m = Math.floor((dif / 1000 / 60) % 60)
    const s = Math.floor((dif / 1000) % 60)
    countDown.innerHTML =  (d < 10 ? '0'+ d : d) + ':' + (h < 10 ? '0' + h: h) + ':' + (m < 10 ? '0'+ m : m) + ':' + (s < 10 ? '0'+ s : s)
    console.log((d < 10 ? '0'+ d : d) + ':' + (h < 10 ? '0' + h: h) + ':' + (m < 10 ? '0'+ m : m) + ':' + (s < 10 ? '0'+ s : s))
    if (d < 0 && h < 0 && m < 0 && s < 0) {
        countDown.innerHTML = ('00')
        countDown.classList.add('done')
    } else if (d < 1 && h < 1 && m < 1) {
        countDown.innerHTML = ((s < 10 ? '0' + s : s))
        countDown.classList.add('final')
        countDown.classList.remove('countDown')
        countDown.classList.remove('semiFinal')
         text[0].classList.add('hidden')
         text[1].classList.add('hidden')
         text[2].classList.add('hidden')
        } else if (d < 1 && h < 1) {
            countDown.innerHTML = ((m < 10 ? '0' + m : m)) + ':' + (s < 10 ? '0' + s : s)
            countDown.classList.add('semiFinal')
        countDown.classList.remove('countDown')
         text[0].classList.add('hidden')
         text[1].classList.add('hidden')
         text[2].classList.add('hidden')
        } else if (d < 1) {
            countDown.innerHTML = (h < 10 ? '0' + h: h) + ':' + (m < 10 ? '0'+ m : m) + ':' + (s < 10 ? '0'+ s : s)
        }
    
    if (d < 1 && h < 1 && s < 52 && m < 2) {
        const prevsong = document.getElementById('prevsong')
        prevsong.load()  
    }
    
    if (d < 1 && h < 1 && s < 45 && m < 2) {
                const avicci = document.getElementById('mainsong')
                prevsong.load()
                avicci.play()
        
            } /*else if (isMute===false && s > 52 && m > 0) {
                console.log('gothere')
                const prevsong = document.getElementById('prevsong')
                prevsong.play()
            }*/
}
//Runs 1 time per second    
setInterval(count, 1000)
