function timeLoop(jump) {
    let date = new Date();
    let hour = date.getHours();
    let sec = date.getSeconds();
    let countLoop = 0;
    for (let i = hour; i < sec; i += jump) {
        console.log(i);
        countLoop++;
    }
    return countLoop;
}

let hopingTime = timeLoop(4);
console.log(hopingTime);

