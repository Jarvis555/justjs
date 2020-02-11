let name = "Jarvis";
let address = "511 East Arkansas Lane";
let age = 31;
let birthday = "July, 26";
console.log("My name is " + name + " I and live at " + address + " and is " + age + " year old and my birthday is " + birthday);

let date = new Date("july 26, 1988");
let now = Date.now();


let sec = now - date;

console.log(sec);
console.log(" I am " + (sec / 24 * 60 * 60 * 1000) + " days old ")
console.log( "There " + 365 * 24 * 60 * 60 + " in a year");




