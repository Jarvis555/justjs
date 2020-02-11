let phrase = ("We hold these truths to be self-evident, taht all men are created equal, taht they are endowed by their Creator with certain unalienable Rights, taht among these are Life, Liberty and the pursuit of Happiness. Taht to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed.");


let name = phrase.indexOf("Governments");
console.log(name)

let start = phrase.indexOf("all");
let end = phrase.indexOf(",", start);
console.log(phrase.substring(start, end));

let rep = phrase.replace(/taht/ig, "that");
console.log(rep);

let len = phrase.length;
console.log(len);

