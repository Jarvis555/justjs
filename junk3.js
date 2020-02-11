let chatter;
function militaryMinds(chatter) {
    let answer;
    switch (chatter) {
        case "A":
            answers = "A is Alpha";
            break;
        case "B":
            answers = "B is Bravo";
            break;
        case "C":
            answers = "C is Charlie";
            break;
        case "D":
            answers = "D is Delta ";
            break;
        case "E":
            answers = "E is  Echo";
            break;
        case "F":
            answers = "F is Foxtrot";
            break;
        case "G":
            answers = "G is Golf";
            break;
        case "H":
            answers = "H is Hotel";
            break;
        case "I":
            answers = "I is India";
            break;
        case "J":
            answers = "J is Juliet";
            break;
        case "K":
            answers = "K is Kilo";
            break;
        case "L":
            answers = "L is Lima";
            break;
        case "M":
            answers = "M is Mike";
            break;
        case "N":
            answers = "N is November";
            break;
        case "O":
            answers = "O is Oscar";
            break;
        case "P":
            answers = "P is Papa";
            break;
        case "Q":
            answers = "Q is Quebec";
            break;
        case "R":
            answers = "R is Romeo";
            break;
        case "S":
            answers = "S is Sierra";
            break;
        case "T":
            answers = "T is Tango";
            break;
        case "U":
            answers = "U is Uniform";
            break;
        case "V":
            answers = "V is for Victor";
            break;
        case "W":
            answers = "W is Whiskey";
            break;
        case "X":
            answer = "X is X-Ray";
            break;
        case "Y":
            answer = "Y is Yankee";
            break;
        case "Z":
            answer = "Z is Zulu";
            break;
        default:
            answer = "Not in my Battalion";
    }
    return answer;
}
chatter = "C";
let milcode = militaryMinds(chatter);
console.log(militaryMinds("H"));