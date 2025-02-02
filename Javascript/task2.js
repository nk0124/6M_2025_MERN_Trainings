

// question-1
let country=["India","Pakistan","Japan","Canada","New Zeeland"];
console.log(country,country.length);
console.log(country[3])
country.shift()
console.log(country)
country.push("Australia")
console.log(country)
for(let i=0;i<country.length;i++){
    console.log(country[i])
}

// question-2
let employee = {
    employee_name:"Raaj",
    dept:"Manager",
    join_year:2012

}
console.log(employee)
console.log(employee.dept)
delete employee.join_year
console.log("Delete",employee)
employee.employee_name="neetu";
console.log(employee)


// question-3
function  restParameter(args){
      for(let i=0;i<args.length;i++){
        console.log(args[i]);
      }
}
restParameter("hello world");

function printLetter(str){
    // console.log(str.length);
    
   for(let i=0; i<str.length; i++){
    // console.log(i);
    // console.log(str[i]);
    console.log(str.charAt(i))
   }
    
}
printLetter("janki")
printLetter("hello world")



// question-4
const numbers = Array.from({ length: 50 }, (_, index) => index + 1);
const divisibleByThree = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
        divisibleByThree.push(numbers[i]);
    }
}

// Print numbers array
console.log("numbers:", numbers);

// Print divisibleByThree array
console.log("Numbers divisible by 3:", divisibleByThree);


let arr=[1,2,3,4,5,6]
// 6, 1,2,3,4,5,  arr=1,2,3,4,5      
let x=arr.pop()
console.log(x)
arr.unshift(x)
console.log(arr)