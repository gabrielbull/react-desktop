'use strict';

var fs = require('fs');
var gulp = require('gulp');
var replace = require('gulp-replace');
var rename = require("gulp-rename");
var Promise = require('bluebird');

var extractDocs = function () {
  return new Promise((resolve) => {
    var content = fs.readFileSync('./assets/index.html');

    gulp.src('./raw-docs/**\/*.html')
      .pipe(replace(/^[\s\S.]*$/g, content))
      .pipe(replace('UA-00000000-1', 'UA-68950619-1'))
      .pipe(rename(function (path) {
        if (path.basename !== 'index') {
          path.dirname += '/' + path.basename;
          path.basename = 'index';
          path.extname = '.html';
        }
      }))
      .pipe(gulp.dest('./docs'))
      .on('end', resolve)
  });
};

var createPages = function () {
  return new Promise((resolve) => {
    gulp.src('./assets/index.html')
      .pipe(replace('UA-00000000-1', 'UA-68950619-1'))
      .pipe(gulp.dest('./demo/'))
      .pipe(gulp.dest('./docs/'))
      .pipe(gulp.dest('.'))
      .on('end', resolve)
  });
};

gulp.task('create-pages', function (cb) {
  createPages()
    .then(extractDocs)
    .then(cb);
});
