

let restro=[
    {name:"food bazar", rating:4, cost:"500 per person"}, // index-0
    {name:"yellow chillis", rating:3.5, cost:"700 per person"},
    {name:"burger king", rating:3.7, cost:"200 per person"},
]

console.log( "type of " ,typeof restro) // type -> object
console.log(restro)
console.log(restro[1].name);
console.log(restro[2].cost);
restro.push({name:"aangan",rating:5,cost:"1000 per person"})
console.log(restro);

restro.shift()
console.log(restro);

for(let i=0;i<restro.length;i++){
    console.log(restro[i].name);
    // restro[i].distance=i+1+"km"
}
console.log(restro);


