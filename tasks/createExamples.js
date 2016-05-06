'use strict';

var gulp = require('gulp');
var git = require('gulp-git');
var rimraf = require('rimraf');
var babel = require('gulp-babel');
var Promise = require('bluebird');

var cloneReactDesktop = function () {
  return new Promise((resolve) => {
    git.clone('https://github.com/gabrielbull/react-desktop.git', function (err) {
      resolve();
    });
  });
};

var removeReactDesktop = function () {
  return new Promise((resolve) => {
    rimraf.sync('react-desktop');
    resolve();
  });
};

var copyExamples = function () {
  return new Promise((resolve) => {
    gulp.src('./react-desktop/examples/**/*')
      .pipe(gulp.dest('./examples/'))
      .on('end', resolve);
  });
};

var transpile = function () {
  return new Promise((resolve) => {
    gulp.src('./examples/**/*')
      .pipe(babel({
        "presets": [
          "es2015",
          "stage-0",
          "react"
        ],
        "plugins": [
          "transform-decorators-legacy"
        ]
      }))
      .pipe(gulp.dest('./examples'))
      .on('end', resolve);
  });
};

gulp.task('create-examples', function (cb) {
  removeReactDesktop()
    .then(cloneReactDesktop)
    .then(copyExamples)
    .then(removeReactDesktop)
    .then(transpile)
    .then(cb);
});
