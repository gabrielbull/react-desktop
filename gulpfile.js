'use strict';

require('./tasks/createDocs');
require('./tasks/createPages');
require('./tasks/compress');
require('./tasks/createExamples');

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('bundle', function (cb) {
  runSequence(
    'create-pages',
    'compress',
    cb
  );
});
