var gulp = require('gulp');
var uglify = require('gulp-uglify');

var compress = function() {
  return gulp.src('build/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build'));
};

gulp.task('compress', compress);

