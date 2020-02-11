let birthdayGift = [];
birthdayGift.unshift("a diamond ring");
birthdayGift.unshift("a designer purse");
birthdayGift.unshift("a dinner date");
birthdayGift.unshift("a card");
birthdayGift.unshift("a vacation");
birthdayGift.push("a tedday bear");
birthdayGift.push("a necklace");
birthdayGift.push("chocolate");
birthdayGift.push("a bracelet");
birthdayGift.push("a marriage porposal");
console.log(birthdayGift);

let frontOne = birthdayGift.shift();
let frontTwo = birthdayGift.shift();
console.log(frontOne, frontTwo);
console.log(birthdayGift);

let cap = "chocolate";
cap = cap.toUpperCase();
console.log(cap);
birthdayGift.push(cap);
console.log(birthdayGift);

birthdayGift.sort();

birthdayGift.forEach(gifts => console.log("My gift to you is " + gifts));

let count = -5;

while ( count < 10){
    console.log("while " + count)
    count++;
}
do{
    console.log("do while " + count);
    count++;
}while(count < 20)

