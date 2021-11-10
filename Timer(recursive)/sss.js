
     

startButton.addEventListener("click",()=>{
    var x = setInterval(function() {
        const newYearsDate = new Date(newYears);
        const currentDate = new Date();
    
        
    
        const totalSeconds = (newYearsDate - currentDate) / 1000;
    
        console.log(newYearsDate )
        console.log(totalSeconds)
    
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;
    
        daysEl.innerHTML = days;
        hoursEl.innerHTML = hours;
        minsEl.innerHTML = mins;
        secondsEl.innerHTML = seconds;
    
        if(totalSeconds <= 0){
            clearInterval(x)
            daysEl.innerHTML = 0;
            hoursEl.innerHTML = 0;
            minsEl.innerHTML = 0;
            secondsEl.innerHTML = 0;
            document.getElementById("dllm").innerHTML= ("u r ")
        }    
    },1000) 
})


const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const resetButton = document.getElementById("reset");
const startButton = document.getElementById("start");

const newYears = "6 Nov 2021 12:00:00";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    console.log(newYearsDate )
    console.log(totalSeconds)

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;

    if(totalSeconds <= 0){
        clearInterval(x)
        daysEl.innerHTML = 0;
        hoursEl.innerHTML = 0;
        minsEl.innerHTML = 0;
        secondsEl.innerHTML = 0;
        document.getElementById("dllm").innerHTML= ("u r ")
    }    
}


startButton.addEventListener("click",()=>{
     var x = setInterval(countdown,1000)
})

resetButton.addEventListener("click",()=>{
    clearInterval(x)
    daysEl.innerHTML = 0;
    hoursEl.innerHTML = 0;
    minsEl.innerHTML = 0;
    secondsEl.innerHTML = 0;
    
})

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const resetButton = document.getElementById("reset");
const startButton = document.getElementById("start");

const newYears = "6 Nov 2021 12:00:00";

var x = setInterval(function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    console.log(newYearsDate )
    console.log(totalSeconds)

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;

    if(totalSeconds <= 0){
        clearInterval(x)
        daysEl.innerHTML = 0;
        hoursEl.innerHTML = 0;
        minsEl.innerHTML = 0;
        secondsEl.innerHTML = 0;
        document.getElementById("dllm").innerHTML= ("u r ")
    }

      },1000) 
    
    




startButton.addEventListener("click",()=>{
     var x = setInterval(countdown,1000)
})

resetButton.addEventListener("click",()=>{
    clearInterval(x)
    daysEl.innerHTML = 0;
    hoursEl.innerHTML = 0;
    minsEl.innerHTML = 0;
    secondsEl.innerHTML = 0;
    
})

5

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');
const resetButton = document.getElementById('reset');
const startButton = document.getElementById('start');

const newYears = '6 Nov 2021 01:15:00';

let nIntervId;

function startTimer() {
    if (!nIntervId) {
        nIntervId = setInterval(Timer, 1000)
    }
}

function Timer() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerText = days >= 0 ? days : 0;
    hoursEl.innerText = hours >= 0 ? hours : 0;
    minsEl.innerText = mins >= 0 ? mins : 0;
    secondsEl.innerText = seconds >= 0 ? seconds : 0;
}

function stopTimer() {
    clearInterval(nIntervId)
    nIntervId = null
    daysEl.innerText = 0;
    hoursEl.innerText = 0;
    minsEl.innerText = 0;
    secondsEl.innerText = 0;
}

startButton.addEventListener('click', startTimer);

resetButton.addEventListener('click', stopTimer);


6

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const resetButton = document.getElementById("reset");
const startButton = document.getElementById("start");

const newYears = "6 Nov 2021 12:00:00";

var x = setInterval(function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    console.log(newYearsDate )
    console.log(totalSeconds)

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    console.log(totalSeconds);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;

    if(totalSeconds <= 0){
        clearInterval(x)
        daysEl.innerHTML = 0;
        hoursEl.innerHTML = 0;
        minsEl.innerHTML = 0;
        secondsEl.innerHTML = 0;
        document.getElementById("dllm").innerHTML= ("u r ")
    }
    },1000) 
    
startButton.addEventListener("click",()=>{
    setInterval(x)
})

resetButton.addEventListener("click",()=>{
    clearInterval(x)
    daysEl.innerHTML = 0;
    hoursEl.innerHTML = 0;
    minsEl.innerHTML = 0;
    secondsEl.innerHTML = 0;   
})

7

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');
const resetButton = document.getElementById('reset');
const startButton = document.getElementById('start');

const newYears = '6 Nov 2021 02:00:00';

let inIntervId;

function startTimer() {
    if (!inIntervId) {
        inIntervId = setInterval(Timer, 1000)
    }
}

function Timer() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    console.log(seconds);

    daysEl.innerText = days >= 0 ? days : 0;
    hoursEl.innerText = hours >= 0 ? hours : 0;
    minsEl.innerText = mins >= 0 ? mins : 0;
    secondsEl.innerText = seconds >= 0 ? seconds : 0;
}

function stopTimer() {
    clearInterval(inIntervId)
    inIntervId = null;
    daysEl.innerText = 0;
    hoursEl.innerText = 0;
    minsEl.innerText = 0;
    secondsEl.innerText = 0;
}

startButton.addEventListener('click', startTimer);

resetButton.addEventListener('click', stopTimer);