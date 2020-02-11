let ages = [2, 5, 10, 18, 22, 23, 30, 33, 35, 40, 50];



ages.forEach(age => showage(age));

function showage(age){
    if ( age < 10){
        console.log("Child " + age);
    }else if(age >= 10 && age <= 20){
        console.log("Teenager " + age);
    }else if(age >= 20 && age < 40 ){
        console.log("young adult " + age);
    }else if(age >= 40 ){
        console.log("just plain old " + age);
    }
}

let animals = [];        // create an empty array

animals.push('zebra');         //  push will add these items to the END of the array
animals.push('horse');
animals.push('long horn');
animals.push('labradoodle');
animals.unshift('snake');      //  unshift (I don't like the word either!)
animals.unshift('snail');      //  unshift will add to the START or TOP of the array
animals.unshift('worm');
animals.unshift('gerbil');     //  since this is our last unshift it is now the top item in the array

animals[0] = 'monkey';         //  we just changed 'gerbil' to 'monkey'
console.log("animal 0: " + animals[0]);

let last = animals.pop();      //  remove the bottom element from the array
last += " updated ";
console.log("last animal was: " + last);
animals.push(last);            //  add the updated element back to the end of the array
console.log(animals);

let first = animals.shift();   //  shift (remove) the top element from the array
console.log("first animal was: " + first);
let zoo = animals.slice(2,5);  //  create a new array using elements 2,3 and 4 from the animals array
console.log(zoo);

// these examples show arrays using Lambda syntax
let array2;
//  the forEach function will receive each element in the animals array
//    the e variable will hold these elements (it can be called anything)
//    the fat arrow => says using e do the following line of code
//    in our case we are just going to display the element from the array
animals.forEach(e => console.log("-->" + e));
//  filter will do something similar. It looks at each element and
//    does a test on it. In this case 'is the length of the string greater 5?'
//    if so save it to a new array longNames
let longNames = animals.filter(e => e.length > 5);   //  list all animals longer than 5
console.log("Animals with long names: " + longNames);