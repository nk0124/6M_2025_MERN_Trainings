// limitation of object -> it does not work with looping
// beacuse key are unique
let car={
    car1:{
        name:"thar",
        color:"black"
    },
    car2:{
        name:"swift",
        color:"white"
    }
}

console.log(car.car1.name);
console.log(car.car2.color);
// add key value 
car.car2.model=2024;
console.log(car)

delete car.car1.name
console.log(car)


let bike={
    bikesection:{
           bike1:{
            name:"hero",
            color:"black"
           },
        bike2:{
            name:"discover",
            color:"red"
        }
    }
}

console.log(bike.bikesection);
console.log(bike.bikesection.bike1.name);
console.log(bike.bikesection.bike2.color)