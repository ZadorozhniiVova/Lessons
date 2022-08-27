const imagemin = require('gulp-imagemin');
const gulp = require('gulp');

gulp.task('default', () => {
  gulp.src('*images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('images-min/'))
});