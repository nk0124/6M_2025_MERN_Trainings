
// type of variable 

// var,let, const 
// re-declare - var
// re-assign - var,let
// scope - global,functional , block

// global-block - var , let , const
// block - const, let
// functional - let , var , const

// variable declare
var y = 10;
let z = 20;
const x = 30;

// functional block
function myFun(){
    const name="janki"
    console.log("My name is" , name);
}

function myFun(){
    let name="janki"
    console.log("My name is" , name);
}

// console.log(name);
myFun();
myFun();

myFun()
for(let i=1;i<=3;i++); // undefined
{
   console.log(i);
}