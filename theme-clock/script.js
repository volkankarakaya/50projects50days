const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sep","Oct","Nov","Dec"];

toggle.addEventListener('click', (e)=>{
    const html = document.querySelector('html');

    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        e.target.innerHTML = 'Dark Mode'
    }else{
        html.classList.add('dark');
        e.target.innerHTML = 'Light Mode'
    }

})


function setTime(){
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock =hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM'

    
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scaleHour(hoursForClock, minutes)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds)}deg)`

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}`:minutes} ${ampm}`
    
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}


function scaleHour(hour,minute){
    let degree = hour * 30 + minute * 0.5;
    return degree;
}

function scale(min){
    let degree = min * 6;
    return degree;
}

setInterval(setTime,1000)