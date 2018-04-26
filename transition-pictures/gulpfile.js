const gulp = require('gulp'),
  imagemin = require('gulp-imagemin')

gulp.task('default', function () {

  gulp.src('imgs/*')
    .pipe(imagemin([
      imagemin.jpegtran({
        progressive: true
      }),
    ]))
    .pipe(gulp.dest('dist/imgs'));
});