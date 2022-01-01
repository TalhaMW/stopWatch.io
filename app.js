/*************************************************************/

// Dom Elements

let wrapper = document.querySelector('wrapper');
let sec = document.querySelector('.sec');
let minute = document.querySelector('.min');
let playBtn = document.querySelector('.play');
let pauseBtn = document.querySelector(".pause")
let icon = document.querySelector('i');
let reset_Btn = document.querySelector('.reset');
let hours = document.querySelector('.hour');

// // variables
// // functions 
// // events
// // update dom 

// let date = new Date();

// let seconds = date.toLocaleTimeString().split(":")[2].split(" ")[0]
// console.log(seconds);


let counter = 0;
let stopWatch;
let minNum = 0;
let hourNum=0;
playBtn.addEventListener("click",(e)=>{
    playBtn.style="display:none"
    pauseBtn.style="display:block;"
    stopWatch = setInterval(()=>{
        counter=counter+1;
        console.log(counter%60);
        sec.textContent=`${counter%60}`
        if(counter%60===0){
            minNum=minNum+1;
            minute.textContent=`${minNum%60}`
        }
        if(counter%3600===0){
            hourNum=hourNum+1;
            hours.textContent=hourNum;
        }
    },1000);
})
pauseBtn.addEventListener("click",(e)=>{
    pauseBtn.style="display:none"
    playBtn.style="display:block"
    clearInterval(stopWatch)
})