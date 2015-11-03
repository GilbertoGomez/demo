/*
* Dependencias
*/

var gulp = require('gulp')
var buffer = require('vinyl-buffer')
var source = require('vinyl-source-stream')
var conc = require('gulp-concat')
var mini = require('gulp-minify-css')


//tares de gulp  compilar y tarea concatena

gulp.task('css',function (){
	gulp.src('./lib/*.css')
	.pipe(conc('index.css'))
	.pipe(mini())
	.pipe(gulp.dest('./public/css/'))

});
