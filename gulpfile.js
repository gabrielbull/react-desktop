'use strict';

require('./tasks/createDocs');
require('./tasks/createPages');
require('./tasks/compress');

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('bundle', function (cb) {
  runSequence(
    'create-docs',
    'create-pages',
    'compress',
    cb
  );
});
