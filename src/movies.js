// IMPORTAR 
const moviesArray = require('./data.js')

// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
  return moviesArray.map(selector => selector.director );
} 
//console.log(getAllDirectors(moviesArray)) 

// Bonus - Iteration 1.1: Clean the array of directors
function getUniqueDirectors(moviesArray) {
  return [...new Set(moviesArray.map(m => m.director))];
}
//console.log(getUniqueDirectors(moviesArray)) 

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  // TODOS DIRETORES

  const busca = 0; 
  for (let i = 0; i < moviesArray.length; i++) {
    if(moviesArray[i].director === "Steven Spielberg" ){ console.log(moviesArray[i].director);};


    //console.log(moviesArray[i].genre[0]);

    moviesArray[i].genre.forEach(element => console.log(element));
 
    
     for (let j = 0; j < moviesArray[i].genre[j]; j++) {
      console.log(moviesArray[i].genre[j]);
       if(moviesArray[j].genre === "Drama"){ console.log("drasad");};
    } 


    if(moviesArray[i].director === "Steven Spielberg" && moviesArray[i].genre === "Drama"){
      busca += busca;
    }
  }
  return busca;
}

/* function howManyMovies(moviesArray) {
  return moviesArray.filter(m => m.genre.includes("Drama") && m.director === "Steven Spielberg").length;
} */
console.log(howManyMovies(moviesArray)) 

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
