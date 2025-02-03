
let num=[1,2,3,4,5,6,7,8,9,10]
// let even=[]
// for(let y of num){
//     if(y%2==0){
//         even.push(y)
//     }
// }
// console.log(even);

let even=num.filter((el,index)=>{
    if(el%2==0){
        return el
    }
})
console.log(even);

