function getSeconds() {
    let date = new Date();
    let seconds = date.getSeconds();
    return seconds;
}

function getHours() {
    let date = new Date();
    let hours = date.getHours();
    return hours;
}

function getMinutes() {
    let date = new Date();
    let minutes = date.getMinutes();
    return minutes;
}

let curSeconds;
curSeconds = getSeconds();
console.log("Current Seconds = " + curSeconds);
let curHour;
curHour = getHours();
console.log("Current Hour = " + curHour);
let curMinutes;
curMinutes = getMinutes();
console.log("Current Minutes = " + curMinutes);
console.log("Current time = " + curHour + ":" + curMinutes + ":" + curSeconds);

let con = stringTime("jackson");
console.log(con);

function stringTime(jarvis) {
    let newStr
    let sec = getSeconds();
    if (sec < 30) {
        newStr = jarvis.toUpperCase();
    } else {
        newStr = jarvis.toLowerCase();
    }
    return newStr;

}
let a, b, c;
a = 5;
b = 7;
c = 7;
answer = caculator(a, b, c);
console.log(answer);
function caculator(n1,n2,n3){
    let sum;
    sum = n1+n2+n3;
    return sum;


}


