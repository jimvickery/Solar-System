var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
// ======================================================================================
/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
let displayPlanets = "";
planets.forEach(function(item){
    displayPlanets += `${item} `;
});

//get placehodller for planets
var planetsEl = document.getElementById("planets");

//set planet elements = to capPlanets
planetsEl.innerHTML = displayPlanets;

// ======================================================================================
// Use the map method to create a new array where the first letter of each planet is capitalized
let capEl = document.getElementById("cap-planets");
function capitalize(string){
    return string[0].toUpperCase() + string.slice(1);
   }

 capPlanets = planets.map(function(item){
    return capitalize(item);
     
});
// console.log('cap item', capPlanets);
capEl.innerHTML = capPlanets;
// ======================================================================================

// Use the filter method to create a new array that contains planets with 
// the letter 'e'
//placeholder for planets with e
let ePlanetsEl = document.getElementById("e-planets");
// let ePlanets = planets.filter(planetsWithE)

var ePlanetNames = planets.filter(function(word){
    return /e/.test(word);
})
ePlanetsEl.innerHTML = ePlanetNames;

// ======================================================================================

// Use the reduce method to create a sentence from the words in the following array

var wordsEl = document.getElementById('sentence');
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

function arrConvertedToSentence(array){
    var  lastOne = array.pop();
    return array.join(' ')  + lastOne;
}
let arrSentence = arrConvertedToSentence(words);

// console.log('arrySentence', arrSentence);
wordsEl.innerHTML = arrSentence;

// ======================================================================================


