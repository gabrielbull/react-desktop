'use strict';

require('./tasks/createDocs');

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var replace = require('gulp-replace');

var createPages = function () {
  return gulp.src('./index.html')
    .pipe(replace('UA-00000000-1', 'UA-68950619-1'))
    .pipe(replace('/react-desktop/build/bundle.js', 'http://reactdesktop.js.org/build/bundle.js'))
    .pipe(gulp.dest('./demo/'))
    .pipe(gulp.dest('./docs/'))
};

var compress = function() {
  return gulp.src('build/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build'));
};

gulp.task('create-pages', createPages);
gulp.task('compress', compress);
gulp.task('bundle',  function () {
  createPages();
  compress();
});
