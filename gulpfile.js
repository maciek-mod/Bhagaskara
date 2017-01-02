//definiujemy zmienna od gulp-a
var gulp = require("gulp");
//definiujemy nowa zmeinna od sass
var sass = require("gulp-sass");
//wtyczka do wykrywania bledow w JS
var jshint = require("gulp-jshint");
//sourcemaps-pokazuje linijke kodu w scss w przegladarce w narzedziu dev.
var sourcemaps = require('gulp-sourcemaps');

//funkcja do pierz
gulp.task('pierz', function (){
  console.log("pierz");
});
//funkcja do przeptworzenia scss na css. errLogToConsole wyszukuje nam bledy w skladni
gulp.task("sass", function (){
  return gulp.src("scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({errLogToConsole:true ,outputStyle: 'expanded'}))
    .pipe(sourcemaps.write())
  .pipe(gulp.dest("style"))
});
//funkcja do sprawdzenia plikow JS, domyslne ustawineia - default, src wskazuje gdzie pliki sa
gulp.task("jshint", function(){
  return gulp.src("js/*.js")
  .pipe(jshint())
  .pipe(jshint.reporter("default"))
});
// w watch pokauzjemy ktore pliki ma obserowwac, a w nawiazie [] identyfikujemy co ma odpalac czyli funkcje sass
//aby to wylaczyc wciskamy ctrl+c w konsoli
gulp.task("watch", function(){
  gulp.watch("scss/*.scss",["sass"] )
  gulp.watch("scss/partials/*.scss",["sass"] )
})
