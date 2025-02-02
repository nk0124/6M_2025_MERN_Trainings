

let x=["red","green","black", "blue", "skyblue", "white", "orange"]
console.log(x);
console.log(x.length)
console.log("Element at position 1", x[1]);
console.log("Element at position 0", x[0]);

x.push("pink", "yellow")
console.log("After adding element", x);

x.pop()
console.log("Deleting last element", x);

x.shift()
console.log("Deletes first element", x);

x.unshift("mustard")
console.log("add in 0 index",x);

//traverse 
for(let i=0;i<x.length;i++){
    // console.log(i);
    console.log(x[i]);  
}

let minArray=x.slice(2, 6)
console.log("sliced array", minArray);

let arr1=["apple", "mango"]
let arr2=["pears", "grapes", "orange"]
let combinedArray=[...arr1, ...arr2]
///spread operator- provides copy of array 
console.log(combinedArray);
