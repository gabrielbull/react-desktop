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

var copyDocs = function () {
  return new Promise((resolve) => {
    gulp.src('./react-desktop/*.md')
      .pipe(gulp.dest('./raw-docs/'))
      .on('end', () => {
        gulp.src('./react-desktop/docs/**/*')
          .pipe(gulp.dest('./raw-docs/'))
          .on('end', resolve);
      });
  });
};

var convertMarkdown = function () {
  return new Promise((resolve) => {
    gulp.src('./raw-docs/**\/*.md')
      .pipe(markdown())
      .pipe(gulp.dest('./raw-docs'))
      .pipe(rename(function (path) {
        if (path.basename === 'README') {
          path.basename = 'index';
          path.extname = '.html';
        }
      }))
      .pipe(gulp.dest('./raw-docs'))
      .on('end', resolve)
  });
};

var removeMarkdownFiles = function () {
  return new Promise((resolve) => {
    gulp.src(['raw-docs/**/*.md', 'raw-docs/**/README.html'], {read: false})
      .pipe(clean());
    resolve()
  });
};

var replacePaths = function () {
  return new Promise((resolve) => {
    gulp.src('./raw-docs/**\/*.html')
      .pipe(replace(/README\.md/g, ''))
      .pipe(replace(/\.md/g, ''))
      .pipe(replace(/href="\/CONTRIBUTING"/g, 'href="/docs/CONTRIBUTING"'))
      .pipe(replace(/href="\/CHANGELOG"/g, 'href="/docs/CHANGELOG"'))
      .pipe(replace(/href="\/docs\//g, 'href="/docs/'))
      .pipe(gulp.dest('./raw-docs'))
      .on('end', resolve)
  });
};

/*var extractDocs = function () {
  return new Promise((resolve) => {
    var content = fs.readFileSync('./index.html');

    gulp.src('./raw-docs/**\/*.html')
      .pipe(replace(/^[\s\S.]*$/g, content))
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
};*/

var extractNav = function () {
  return new Promise((resolve) => {
    var content = fs.readFileSync('./raw-docs/index.html');
    var $ = cheerio.load(content);
    fs.writeFile('./raw-docs/nav.html', '<ol>' + $('ol').html() + '</ol>', resolve);
  });
};

gulp.task('create-docs', function (cb) {
  removeReactDesktop()
    .then(cloneReactDesktop)
    .then(copyDocs)
    .then(convertMarkdown)
    .then(removeReactDesktop)
    .then(removeMarkdownFiles)
    .then(replacePaths)
    //.then(extractDocs)
    .then(extractNav)
    .then(cb);
});
