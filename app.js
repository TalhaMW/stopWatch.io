/*************************************************************/

// Dom Elements

let wrapper = document.querySelector('wrapper');
let miliSec = document.querySelector('.mili');
let doubleSec = document.querySelector('.double-sec');
let minute = document.querySelector('.min');
let playBtn = document.querySelector('.play');
let pauseBtn = document.querySelector(".pause")
let icon = document.querySelector('i');
let reset_Btn = document.querySelector('.reset');

// // variables
// // functions 
// // events
// // update dom 

// let date = new Date();

// let seconds = date.toLocaleTimeString().split(":")[2].split(" ")[0]
// console.log(seconds);


let counter = 0;
let stopWatch;
playBtn.addEventListener("click",(e)=>{
    playBtn.style="display:none"
    pauseBtn.style="display:block;"
    stopWatch = setInterval(()=>{
        counter=counter+1;
        console.log(counter);
    },100);
})
pauseBtn.addEventListener("click",(e)=>{
    pauseBtn.style="display:none"
    playBtn.style="display:block"
    clearInterval(stopWatch)
})