let volcanoes = require('./volcanoes.json');
 eruptedIn70s();
volcanoes.forEach(v => v.DEATHS = +v.DEATHS );
function eruptedIn70s() {
    for (const vol of volcanoes) {
        if (vol.Year < 0) {
            console.table(vol);
        }

        if (vol.Location == "Italy") {
            console.table(vol);
        }

    }

}
let volCount = 0;
let volDeath = 0;
let mostDeath = volcanoes[0];
for (const vol of volcanoes) {
    if (vol.Year > 1988 && vol.Year < 2020) {
        volCount++;
    }
    if (vol.DEATHS > 0) {
        volDeath += vol.DEATHS;
    }
    if (mostDeath.DEATHS < vol.DEATHS) {
        mostDeath = vol;
    }

}
console.log(`There is ${volCount} between 1988 and 2020.`);
console.log(`There is ${volDeath} total deaths by volcanoes.`);
console.table(mostDeath);


let countheight = countOfHighestPeak(1000);
console.log(`There are ${countheight} volcanoes over 1000ft.`);
countheight = countOfHighestPeak(5000);
console.log(`There are ${countheight} volcanoes over 5000ft.`);
let volcanoeslist = listOfCounty("Italy")
console.table(volcanoeslist);
volcanoeslist = listOfCounty("Greece")
console.table(volcanoeslist);


function countOfHighestPeak(elevate) {
    let height = 0;
    for (const vol of volcanoes) {
        if (vol.Elevation >= elevate) {
            height++;
        }
    }
    return height;
}

function listOfCounty(country) {
    let listOfVolcanoes = [];
    for (const vol of volcanoes) {
        if (vol.Country == country) {
            listOfVolcanoes.push(vol)
        }
    }
    return listOfVolcanoes;
}
let totalDeaths = volcanoes.reduce ((total, v) => total + v.DEATHS, 0);
console.table('number of deaths ' + totalDeaths);

let totalElevation = volcanoes.reduce ((total, v) => total + v.Elevation, 0);
console.table('number of elevation ' + totalElevation);

let average = (totalElevation / volcanoes.length);
console.log(average);

average = (totalDeaths / volcanoes.length);
console.log(average);