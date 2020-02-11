let name = "Jarvis Jackson";
let dayOfWeek = "Monday";
let favoriteAuthor = "Stephenie Meyer";
let favoriteNumber = 6;
let currentHour = 7;
let roomNumber = 122;

console.log("My favorite number is: " + favoriteNumber);
console.log("I like to read " + favoriteAuthor + " at " + currentHour + " o'clock on " + dayOfWeek + "s in room# " + roomNumber);
console.log(roomNumber + favoriteNumber + currentHour);
let sum = name + dayOfWeek + favoriteAuthor + favoriteNumber + currentHour + roomNumber;
console.log(sum);
sum = favoriteNumber + currentHour + roomNumber + favoriteAuthor + dayOfWeek + name;
console.log(sum);
currentHour += 7;
currentHour *= 13;
currentHour /= 6;
console.log(currentHour);