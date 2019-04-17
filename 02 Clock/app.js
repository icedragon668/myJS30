const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');

setDate = function () {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = (seconds *6) + 90;
    const minsDegrees = (mins * 6) + (seconds/10) + 90;
    const hoursDegrees = (hours * 15) + (mins/2) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    
    console.log(seconds, secondsDegrees)
};

setInterval(setDate, 1000);

setDate();