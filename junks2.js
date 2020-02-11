// let ar1 = [1, 3, 4, 11, 16, 19, 23, 26, 25, 30, 33, 39, 42, 46, 48, 55, 59, 60, 77, 88];
// let totalReduce = ar1.reduce((total, nextNum) => total + nextNum);
// let totalOld = 0;

// for (let i = 0; i < ar1.length; i++) {
//     totalOld += ar1[i];
//     if (ar1[i] > 10)
//         console.log("for" + i + " " + ar1[i]);
//     if (ar1[i] % 2 == 0)
//         console.log(ar1[i] + " is even");
// }
// console.log(`${totalOld} is the total`);
// console.log();
// for (const num of ar1) {
//     if (num < totalOld / ar1.length)
//         console.log(num + " is < the average ")
// }


let fish = ['catfish', 'bass', 'perch', 'bluegill', 'trout', 'salmon', 'tuna', 'alligator gar', 'bull shark', 'seahorse'];
for (let f = 0; f < fish.length; f++) {
    console.log(fish[f]);
    if (fish[f].length > 8) {
        console.log(fish[f] + " has more the 8 letters. ");
    }
    if (fish[f].indexOf("l") != -1) {
        console.log(fish[f] + " has a l");
    }
    if (fish[f].startsWith("t")) {
        console.log(fish[f] + " start with t.")
    }
    if (fish[f].length > 7 && fish[f].endsWith("r")) {
        console.log(fish[f] + " is has more than 7 letters and end with r.")
    }


}
console.log();



let last1 = fish.pop();
let last2 = fish.pop();
let last3 = fish.pop();
console.log(fish);
fish.unshift(last1, last2, last3);
console.log(fish);
let middle = fish.length / 2;
middle = Math.round(middle);
fish.splice(middle, 1);
console.log(fish);

let sumOfFish = 0;
for (let i = 0; i < fish.length; i++) {
    
    sumOfFish += fish[i].length;
}
console.log(sumOfFish);