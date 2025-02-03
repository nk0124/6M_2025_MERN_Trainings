
//map returns array

//map each element -> changes array 
let num=[1,2,3,4,5,6,7,8]
let x=num.map((el,index)=>{
    // console.log(el);
    return el*3
})
console.log(x);

let new_arr=[]
for(let y of num){
    new_arr.push(y*3)
}
console.log(new_arr);
