const start = document.getElementById('start')
const giude = document.getElementById('giude')
const back = document.getElementById('back')


const intro = document.getElementById('intro');
const home = document.getElementById('home');
console.log( intro ,home)

// start.addEventListener("click",function(){
//     intro.classList.add('none')
//     home.classList.remove('none')
// })


// back.addEventListener("click",function(){
//     intro.classList.remove('none')
//     home.classList.add('none')
// })



const semicircle = document.querySelectorAll('.semi_circle')

const sec = 10;

const setTime = sec * 1000;

const startTime = Date.now()

const fullTime = startTime +  setTime;

const timerLoop = setInterval(countDown)
countDown();

function countDown() {
    const currentTime = Date.now()
    const reaminingTime = fullTime - currentTime;
    
    const angle = (reaminingTime / setTime) * 360;

    if (angle > 180 ) {
        semicircle[2].style.display = "none";
        semicircle[0].style.transform  = "rotate(180deg)";
        semicircle[1].style.transform  = `rotate(${angle}deg)`;
    }else{
        semicircle[2].style.display = "block";
        semicircle[0].style.transform  = `rotate(${angle}deg)`;
        semicircle[1].style.transform  = `rotate(${angle}deg)`;
    }

    if (reaminingTime < 0) {
        clearInterval(timerLoop)
    }
}

