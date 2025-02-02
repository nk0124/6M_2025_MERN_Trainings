
let y={
    name:"food bazaar",
    rating:4,
    distance:8,
    time:"10-12"
}

console.log(y);
// console.log(y["name"])
console.log(y.name);
// key-value pairs where keys must be unique
y.cost=1000 // add new key
y.rating=5 // replace the value using same key
console.log(y);

delete y.distance // delete key
console.log("delete" ,y)