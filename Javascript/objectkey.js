
let obj={
    name:"janki",
    course:"react",
    duration:"6month"
}
// let course=obj.course 
// console.log("course is", course);
let {course, name, duration}=obj
console.log(course);

console.log(Object.keys(obj));
console.log(Object.values(obj));
let x=Object.values(obj)
x.map((el)=>{
    console.log(el);
})

// show error
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// let k=Object.key(obj)
// x.map((el)=>{
//     console.log(el);
// })

console.log(typeof(obj)); // type of obj-> object
let num=[1,2,3] // type of aray-> object
console.log(typeof(num));

//qs- query string 
//json - 
//obj to str
let str=JSON.stringify(obj)
console.log(obj ,"object");
console.log(str, "str");

console.log(typeof(str));

//str to obj
let obj1=JSON.parse(str)
console.log(obj1);
console.log(typeof(obj1));

let a="10"
let b=20
// let c=parseInt(a)
let c=Number(a)
console.log(typeof(a), typeof(c));

console.log(c+b);

