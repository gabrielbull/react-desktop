'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var git = require('gulp-git');
var rimraf = require('rimraf');
var markdown = require('gulp-markdown');
var clean = require('gulp-clean');
var replace = require('gulp-replace');

var createPages = function () {
  return gulp.src('./index.html')
    .pipe(gulp.dest('./demo/'))
    .pipe(gulp.dest('./docs/'))
};

var compress = function() {
  return gulp.src('build/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build'));
};

var cloneReactDesktop = function (cb) {
  git.clone('https://github.com/gabrielbull/react-desktop.git', function (err) {
    if (err) return cb(err);
    cb();
  });
};

var removeReactDesktop = function (cb) {
  rimraf.sync('react-desktop');
  if (cb) cb();
};

var copyDocs = function () {
  return gulp.src('./react-desktop/docs/**/*')
    .pipe(gulp.dest('./raw-docs/'));
};

var convertMarkdown = function () {
  return gulp.src('./raw-docs/**\/*.md')
    .pipe(markdown())
    .pipe(gulp.dest('./raw-docs'));
};

var replacePaths = function () {
  return gulp.src('./raw-docs/**\/*.html')
    .pipe(replace(/README\.md/g, 'index.html'))
    .pipe(replace(/\.md/g, '.html'))
    .pipe(replace(/href="\/docs\//g, 'href="/react-desktop/docs/'))
    .pipe(gulp.dest('./raw-docs'));
};

gulp.task('clone-react-desktop', cloneReactDesktop);
gulp.task('remove-react-desktop', removeReactDesktop);
gulp.task('copy-docs', ['remove-react-desktop', 'clone-react-desktop'], function () {
  return copyDocs();
});
gulp.task('create-pages', createPages);
gulp.task('convert-markdown', ['copy-docs'], function (cb) {
  return convertMarkdown();
});

gulp.task('convert-docs', ['convert-markdown'], function () {
  removeReactDesktop();
  return gulp.src('raw-docs/**/*.md', {read: false})
    .pipe(clean());
});

gulp.task('create-docs', ['convert-docs'], function () {
  return replacePaths();
});

gulp.task('compress', compress);
gulp.task('bundle',  function () {
  createPages();
  compress();
});
