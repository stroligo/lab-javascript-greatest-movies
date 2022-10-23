// IMPORTAR 
const moviesArray = require('./data.js')

// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
  return moviesArray.map(pointer => pointer.director );
} 
//console.log(getAllDirectors(moviesArray)) 

// Bonus - Iteration 1.1: Clean the array of directors
function getUniqueDirectors(moviesArray) {
  return [...new Set(moviesArray.map(m => m.director))];
}
//console.log(getUniqueDirectors(moviesArray)) 

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let filtered = moviesArray.filter(pointer => pointer.genre.includes("Drama")  && pointer.director === "Steven Spielberg" ).length;
  return filtered;
}
// console.log("Total de videos: " + howManyMovies(moviesArray)) 

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {return 0};

  const valores = moviesArray.reduce((accum, pointer) => {return (pointer.score || 0) + accum },0) ;

  return parseFloat(( valores / moviesArray.length ).toFixed(2));
}
//console.log("Media dos Scores: " + scoresAverage(moviesArray)) 

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
  return scoresAverage(moviesArray.filter(pointer => pointer.genre.includes("Drama")))
}
//console.log("Media dos Scores dos DRAMAS: " + dramaMoviesScore(moviesArray)) 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let newArr = [...moviesArray].sort((m1, m2) => {
    if (m1.year > m2.year) return 1;
    if (m1.year < m2.year) return -1;
    if (m1.title > m2.title) return 1;
    if (m1.title < m2.title) return -1;
  }) 
  console.log(newArr.map(m => m.year + " : " + m.title))   
  return newArr;
}
//console.log("Filmes por ano: " + orderByYear(moviesArray)) 

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray.map(m => m.title).sort().slice(0, 20);
}
//console.log("Filmes por ano: " + orderAlphabetically(moviesArray)) 

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const newArray = [];

  for (const movie of moviesArray) {

    const duration = movie.duration;
    let hours = 0;
    let minutes = 0;

    if (duration.includes("h")) {
      hours = parseInt(duration.split(" ")[0].replace("h", "")) * 60;
    }
    if (duration.includes("min")) {
      minutes = parseInt(duration.split(" ")[1].replace("min", ""));
    }

    let newMovie = {...movie}
    newMovie.duration = hours + minutes;
    newArray.push(newMovie);
  }
  
  return newArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (!moviesArray.length) return null

  /** Filter all unique years */
  const uniqueYears = [...new Set(moviesArray.map(m => m.year))]
  const averageScoreByYear = []
  
  for (let year of uniqueYears) {

    const filteredMovies = moviesArray.filter(movie => movie.year === year)
    
    let avg = 0;
    filteredMovies.forEach(movie => {avg += movie.score;})

    let average = Math.round((avg / filteredMovies.length + Number.EPSILON) * 100) / 100

    averageScoreByYear.push({year, average});
  }

  let bestYear = averageScoreByYear.filter(el => el.average === Math.max(...averageScoreByYear.map(element => element.average)))
  if (bestYear.length > 1){
    bestYear = bestYear.filter(el => el.year === Math.min(...bestYear.map(element => element.year)))
  }
  bestYear = bestYear[0]
  return `The best year was ${bestYear.year} with an average score of ${bestYear.average}`;
}
