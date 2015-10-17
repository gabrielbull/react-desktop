'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');

var createPages = function () {
  gulp.src('./index.html')
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
