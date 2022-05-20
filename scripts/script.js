let sliderDisplay = document.querySelector(".slider img");

let i = 1;

setInterval(() => {
    (i > 4) ? i = 1 : i++;
    sliderDisplay.src = `./img/slider_${i}.png`;
    console.log(sliderDisplay);
}, 5000);