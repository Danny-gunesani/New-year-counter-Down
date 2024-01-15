const daysel = document.getElementById('days');
const hoursel = document.getElementById('hours');
const minsel = document.getElementById('mins');
const secondsel = document.getElementById('seconds');




const  newyears = "1 Jan 2025";
function countdown(){
    const newYearDate = new Date(newyears);
    const currentDAte = new Date();


    const totalSeconds =  (newYearDate - currentDAte)/1000;

    const days = Math.floor(totalSeconds/3600/ 24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const mins = Math.floor(totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    // console.log(days, hours , mins, seconds);
    daysel.innerHTML = days;
    hoursel.innerHTML = format( hours);
    minsel.innerHTML = format(mins);
    secondsel.innerHTML = format(seconds);




}
function format(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);
