
let colors=["red","green","blue", "pink", "orange"]
//arr.forEach(function (){})
//arr.forEach((el,index)=>{})
//.then(()=>{})
//callback functions - when a function is called inside arguments of other function/method
//whenever you call callback function we don't put paranthesis with it 
//for example setInterval(myFun, time)
///we will not add () with myFun

let x=colors.forEach((color, index)=>{
    console.log("hello", color, index);
})
console.log(x);
