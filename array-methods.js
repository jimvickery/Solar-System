var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var planetsEl = document.getElementById("planets");
// Use the map method to create a new array where the first letter of each planet is capitalized

let capPlanets = "";

planets.forEach(function(item){
//    capPlanets += `${planets.item}.map(${planets.item}.toUpperCase());` 
    capPlanets += `${item}.map(${item.toUpper};` 
});
 


 planetsEl.innerHTML = capPlanets;

// Use the filter method to create a new array that contains planets with the letter 'e'


// Use the reduce method to create a sentence from the words in the following array

var wordsEl = document.getElementById('sentence');

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

