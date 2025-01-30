
// question -1  
function printTable(num){
      for(var i=1;i<10;i++){
          console.log(`${num}*${i} = ${num*i}`);
      }
}
printTable(2);


// question-2
function printEachLetter(str) {
    for(let i=0;i<str.length;i++){
        console.log(str[i]);
    }
}
printEachLetter("neetu")

// qusetion-3 
for(let i=1;i<=1;i++){
    for(let j=1;j<=2;j++){
        for(let k=1;k<=3;k++){
            console.log(i,j,k)
        }
    }
} 