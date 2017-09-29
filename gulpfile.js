var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify'),
    concat = require('gulp-concat');
var clean = require('gulp-clean');

//compile sass
gulp.task('sass', function() {
  gulp.src('assets/styles/main.scss')
  .pipe(sass({style: 'compressed'}))
    .on('error', gutil.log)
  .pipe(gulp.dest('dist'))
});

//compile js
gulp.task('js', function() {
  gulp.src('assets/scripts/*.js')
  .pipe(uglify())
  .pipe(concat('main.js'))
  	.on('error', gutil.log)
  .pipe(gulp.dest('dist'))
});

//default gulp
gulp.task('default', ['sass', 'js']);

//watch command
gulp.task('watch', function() {
  gulp.watch('assets/scripts/*', ['js']);
  gulp.watch('assets/styles/**/*', ['sass']);
});