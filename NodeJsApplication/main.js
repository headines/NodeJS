/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var movies = require('./movie');
var testMovies = movies();
testMovies.faveMovies = "Some stupid movie";
console.log("My favorite movie is "+ testMovies.faveMovies);
