
// question-1

let i_am_array=Array.from({length:20},(_,index)=>index+1)
console.log(i_am_array);
i_am_array.forEach(element=>console.log(element));
let teen_guna=i_am_array.map(el=>{
      return el*3
})
console.log(teen_guna);
console.log(teen_guna.length)
console.log(typeof i_am_array);
console.log(typeof teen_guna);

// question-2
let array_forty=Array.from({length:40},(_,index)=>index+1)
console.log(array_forty,"length" , array_forty.length)
let chotu_array=array_forty.filter(num=>num%2===0)
console.log(chotu_array)
console.log( "chotu_array",chotu_array.length)

// question-3
let countries=["USA","India","Germany","France","Japan","Canada","Bazil","UK"]
let x=countries.forEach((country)=>{
    console.log(country);
})


// question-4
let new_cost=data.map((el,index)=>{
    return {name:el.info.name, rating:el.info.rating.rating_text, image:el.info.image.url,cost:el.info.costText.text}
})
console.log(new_cost);

// question-5
setInterval(
    ()=>{
        let date=new Date()
        console.log(date.getHours(), ":", date.getMinutes(),":", date.getSeconds());
        
    },1000
    
)
