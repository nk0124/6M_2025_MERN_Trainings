

// question-1

let songs=[];
songs.push(
    {song_name:"Shape of you",singer_name:"Ed Sheeran",language:"English"},
    {song_name:"Tum hi ho",singer_name:"Arijit Singh",language:"Hindi"},
    {song_name:"thori der or ruk ja",singer_name:"Arijit Singh",language:"hindi"},
    {song_name:"do you know",singer_name:"Daljit",language:"punjabi"},
    { song_name: "Gangnam Style", singer: "PSY", language: "Korean" },
)

console.log(songs)
console.log(songs[3].song_name)

// question-2
let threeDArray=[
    [
        ["apple","banana","grapes"],
        ["red","pink","blue"]
    ],
    [
        ["Javascript","PHP","React"],
        ["football","basketball","cricket"]
    ]
];

console.log(threeDArray)
console.log(threeDArray[0][1][1]);
console.log(threeDArray[1][0][2])

// question-3
let foodItems={
    veg:{
       w:"wheat",
       c:"cheese"
    },

    non_veg:{
        ck:"chicken kabaab",
        ec:"egg curry"
    }
}
console.log(foodItems.veg.c);


// flaten array
const nestedArray = [1, [2, [3, [4, 5]]]]

const arr=[nestedArray[0],...nestedArray[1]]
console.log(arr);
const arr2=[arr[0], arr[1],...arr[2]]
console.log(arr2);
let arr3=[arr2[0], arr2[1], arr2[2],...arr2[3]]
console.log(arr3);

