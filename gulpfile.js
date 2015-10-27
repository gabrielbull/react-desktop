'use strict';

var fs = require('fs');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var git = require('gulp-git');
var rimraf = require('rimraf');
var markdown = require('gulp-markdown');
var clean = require('gulp-clean');
var replace = require('gulp-replace');
var rename = require("gulp-rename");
var cheerio = require('cheerio');

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
    .pipe(gulp.dest('./raw-docs'))
    .pipe(rename(function (path) {
      if (path.basename === 'README') {
        path.basename = 'index';
        path.extname = '.html';
      }
    }))
    .pipe(gulp.dest('./raw-docs'))

};

var replacePaths = function () {
  return gulp.src('./raw-docs/**\/*.html')
    .pipe(replace(/README\.md/g, ''))
    .pipe(replace(/\.md/g, ''))
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
  return gulp.src(['raw-docs/**/*.md', 'raw-docs/**/README.html'], {read: false})
    .pipe(clean());
});

gulp.task('replace-path-docs', ['convert-docs'], function () {
  return replacePaths();
});

gulp.task('extract-docs', ['replace-path-docs'], function () {
  var content = fs.readFileSync('./index.html');

  return gulp.src('./raw-docs/**\/*.html')
    .pipe(replace(/^[\s\S.]*$/g, content))
    .pipe(rename(function (path) {
      if (path.basename !== 'index') {
        path.dirname += '/' + path.basename;
        path.basename = 'index';
        path.extname = '.html';
      }
    }))
    .pipe(gulp.dest('./docs'));
});

gulp.task('extract-nav', ['extract-docs'], function (cb) {
  var content = fs.readFileSync('./raw-docs/index.html');
  var $ = cheerio.load(content);
  fs.writeFile('./raw-docs/nav.html', '<ol>' + $('ol').html() + '</ol>', cb);
});


gulp.task('create-docs', ['extract-nav'], function () {
});

gulp.task('compress', compress);
gulp.task('bundle',  function () {
  createPages();
  compress();
});
