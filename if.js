let date = new Date();
let hour = date.getHours();
console.log(date);
console.log(hour);

if (hour >= 23 || hour < 7) {
    console.log(`Jarvis is sleeping`);
} else if (hour == 7) {
    console.log(`Jarvis is driving to Edge Tech Academy`);
} else if (hour >= 8 && hour <= 13) {
    console.log(`Jarvis is in class at Edge Tech Academy.`);
} else if (hour >= 14 && hour <= 22) {
    console.log(`Jarvis is at work.`);
} else {
    console.log(`Dont know what Jarvis is doing.`);
}