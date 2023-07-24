// const yazdir = firstName=>
// console.log(`Merhaba ${firstName}`)
// yazdir("Ahmet")
const name = prompt("What's your name?")
let personalName= document.querySelector("span#name")
personalName.innerHTML = name;

function date(){
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
let day = days[d.getDay()];
let dateD=document.querySelector("span#dateD")
dateD.innerHTML = day;

let dateH=document.querySelector("span#dateH")
let hour=d.getHours();
let min=d.getMinutes();
let sec=d.getSeconds();
if (sec<10){
    sec=`0${sec}`
}
if (min<10){
    sec=`0${min}`
}
if (hour<10){
    sec=`0${hour}`
}
dateH.innerHTML = `${hour}:${min}:${sec}`;
setTimeout(date, 1000);
}
date();