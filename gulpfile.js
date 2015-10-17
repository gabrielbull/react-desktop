'use strict';

var gulp = require('gulp');

var createPages = function () {
  gulp.src('./index.html')
    .pipe(gulp.dest('./demo/'))
    .pipe(gulp.dest('./docs/'))
};

gulp.task('create-pages', createPages);

gulp.task('bundle',  function () {
  createPages();
});
