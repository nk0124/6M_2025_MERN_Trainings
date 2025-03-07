
let dayItem = document.querySelector("#days")
let hoursItem = document.querySelector("#hours")
let minItem = document.querySelector("#min")
let secItem = document.querySelector("#sec")

let countDown=()=>{
    let futureDate = new Date("1 March 2025");
    let currentDate = new Date();
    // console(currentDate)
    let myDate = futureDate - currentDate;

    let days = Math.floor(myDate/1000/60/60/24);
    let hours = Math.floor(myDate/1000/60/60) %  24;
    let min = Math.floor(myDate/1000/60) % 60;
    let sec = Math.floor(myDate / 1000) % 60;

    dayItem.innerHTML=days;
    hoursItem.innerHTML= hours;
    minItem.innerHTML = min;
    secItem.innerHTML = sec;
}

countDown()
 setInterval(countDown,1000);

//  function scrollToBack(){
//     let scrollToButton = document.querySelector("#scrollUp")
//     window.onscroll = function(){
//         var scroll = document.documentElement.scrollTop;
//         if(scroll>=250){
//             scrollToButton.classList.add('scrollActive')
//         }else{
//             scrollToButton.classList.remove('scrollActive')
//         }
//     }
//  }
//  scrollToBack()




