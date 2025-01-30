
// first
function remainder(y){
    console.log(y%3)
}

remainder(10);
remainder(18);

// second
function num(n){
    if(n%2==0){
        console.log("number is a even")
    } else{
        console.log("number is a odd ")
    }
}

num(10);

// third
const equal=(a,b)=>{
    if(a===b){
        console.log("a and b are equal")
    }else {
        console.log("a and b are not equal")
    }
}

equal(10,10)
equal("neetu",2);

// forth
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); 
console.log(add(2, 3));

// fifth
const item= (price)=>{
    const gst=price * gstRate;
    const total = price + gst;

    let shippingCharge=100;
    if(total>1000){
        console.log("no shipping charges")
    }else if(total>500){
        console.log("shipping charges will be 50")
    }else if(total<500){
        console.log("shipping charges will be 100")
    }
}

// switch

let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName);


let pure=(x)=>{
    console.log(x*2)
}

pure(5)
pure(5)
pure(10)