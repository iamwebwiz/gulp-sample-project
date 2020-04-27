const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const cssnano = require('gulp-cssnano');
const gulpIf = require('gulp-if');
const useRef = require('gulp-useref');

gulp.task('sass', async () => {
  return gulp
    .src('app/scss/index.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
});
