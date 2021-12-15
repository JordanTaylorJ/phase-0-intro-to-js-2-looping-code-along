// Code your solutions in this file
/* 
for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}
*/

/*
const gifts = ["teddybear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; 
        while (i < gifts.length) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++;
    }
    return gifts;
}

wrapGifts(gifts);
*/


function writeCards(name, occasion) {
    let cardArray = [];

    for (let i = 0; i < name.length; i++){
        cardArray = [...cardArray, (`Thank you, ${name[i]}, for the wonderful ${occasion} gift!`)];
    }
    
    return cardArray;
}

function countDown(number){
    while (number >= 0){
        console.log(number--);
    }
}

