for( let i = 0; i <= 1000000; i++){
    //console.log('---->' + i);
}
console.log('Done')

let ar = [1,4,6,3,23,44,-55,55,65,78,6,4,3,4,6,7,-10000];
let smaller = ar[0];
let larger = ar[0];
for(let i = 0; i < ar.length; i++){
    ar[i] *= 5;
    if(ar[i] < 20 || ar[i] > 80){
        console.log('-->' + ar[i])
    }
    console.log(`${i} : ${ar[i]}`);
 
}
for (const num of ar){
    if (num < smaller){
        smaller = num
    }
    if (num > larger){
        larger = num
    }
    
}
console.log('the smallest number is ' + smaller);
console.log('the largest number is ' + larger);

let arStates = ['Mississippi', 'Texas','New York', 'Washington', 'Kentucky', 'Nevada', 'Michigan', 'South Carolina', 'North Carolina', 'Louisanna',  ]
let longerState = arStates[0];
for(const state of arStates){
    console.log(state);
    if(state.length > longerState.length){
         longerState = state;
    }
    if(state.startsWith('New')){
        console.log('the state that starts with New is ' + state)
    }
    if(state.includes('x')){
        console.log('this state has a x ' + state);
    }

}
console.log('the longer state is ' + longerState);
arStates.sort();
console.table(arStates);