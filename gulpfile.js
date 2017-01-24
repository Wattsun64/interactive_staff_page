const gulp = require('gulp')
const browserSync = require('browser-sync')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')

gulp.task('sass', () => {
  console.log('sass called')
  return gulp
    .src('styles/*.scss')
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('styles/'))
    .pipe(browserSync.stream())
})

gulp.task('serve', ['sass'], () => {
  browserSync.init({
    server: './'
  })

  gulp.watch('styles/*.scss', ['sass'])
  gulp.watch('./*.html').on('change', browserSync.reload)
})

gulp.task('default', ['sass', 'serve'])
