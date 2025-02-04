// utc-> universal time constant
let date=new Date()
console.log(date);
console.log("day is ", date.getDay());
console.log("date is ", date.getDate());
console.log("month is ", date.getMonth()+1);
console.log("year is ", date.getFullYear());
console.log("hour is ", date.getHours());
console.log("Minutes is ", date.getMinutes());
console.log("Seconds is ", date.getSeconds());
console.log("Mill-Seconds is ", date.getMilliseconds());
let months=["January", "February", "March","april"]
let monthfetch=date.getMonth()
console.log(months[monthfetch]);

// if(day===1){
//     console.log("Monday");
    
// }else if(day===2){
//     console.log("Tuesday");
// }
