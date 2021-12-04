// fs = require('fs');

// const data = fs.readFileSync('./data.txt');
// console.log(data.toString());

const {stealRing, characters} = require('./character.js')

let myChars =  characters;
myChars = stealRing(myChars, 'Frodo');
for(const c of characters) {
    console.log(c);
}