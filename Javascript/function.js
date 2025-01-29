
// reuseable bit of code
// function define

function sum(){
    var a = 10
    var b = 20;
    console.log(a+b)
}

// function call
sum()
sum()
sum()

// function with parameter / agruments 
function multi(a,b){ // parameter
      // let random=Math.random()
      // let decim=Math.random()*100
      // let whole = Math.round(decim)
      let random=Math.round(Math.random()*100)
      console.log(random, "random")
      console.log(a*b*random)
}

multi(10,2)
multi(15,3)
multi(25,25)
multi(10,2)

function abc(a,b,c,d,e,f){
    console.log(a,b,c,d,e,f)
}

abc(1,2,3,4,5,6)
abc(10,20) // remaining undefined

// rest parameters
function abc(...x){
    console.log(x)
}

abc(1,2)// output - > array
abc(1,2,2,3,4,4,3,5)
abc(10,203,40,43,234,76,98,76,)

// anonymous function
// function (){}
// .then(
//     function(){

//     }
// )


// .catch(
//     function(){

//     }
// )

// arrow fucntion es-6 ecma script -6 compact and cleaner provide

//  ()=>{}

    // .then(()=>{

    // })

    // .catch(()=>{})

let x = (num)=>{
    console.log(num/2)
}

x(50)
x(40)