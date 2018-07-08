// Third Party Dependencies
var gulp = require('gulp');
// For Minifying HTML
var htmlmin = require('gulp-htmlmin');
// For Compiling SASS to CSS
var sass = require('gulp-sass');
// For Minifying CSS
var cleanCSS = require('gulp-clean-css');
// For Minifying Javascript
var uglify = require('gulp-uglify');
// For joining multiple files into one
var concat = require('gulp-concat');
// For optimizing our png and jpg images
var tinypng = require('gulp-tinypng');

var jsFiles = [
  "./src/js/vendors/jquery-3.3.1.min.js",
  "./src/js/vendors/modernizr/modernizr-custom.js",
  "./src/js/vendors/detectizr/detectizr.js",
  "./src/js/vendors/bootstrap/bootstrap.min.js",
  "./src/js/vendors/verge/verge.js",
  "./src/js/vendors/slick-carousel/slick.min.js",
  "./src/js/utils/plugins.js",
  "./src/js/base/global.js",
  "./src/js/base/base.js",
  "./src/js/utils/tools.js",
  "./src/js/utils/simplified.js",
  "./src/js/components/imageLoad.js",
  "./src/js/components/iframeLoad.js",
  "./src/js/components/carousel.js"
];

var scssFiles = [
  "./src/scss/main.scss"
]

gulp.task('default', ['scss', 'js', 'images', 'watch']);

gulp.task('scss', function () {
  return gulp.src(scssFiles)
    .pipe(concat('styles.min.scss'))
    .pipe(sass({'indented_syntax': true}).on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('js', function () {
  return gulp.src(jsFiles)
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('images', function () {
  return gulp.src('./src/images/**/*')
    .pipe(tinypng('nbQUAKvU5GRfPpJ1-leZLhLzckM4qqtf'))
    .pipe(gulp.dest('./dist/images'));
});

gulp.task('watch', function () {
  gulp.watch('./src/scss/**/*.scss', ['scss']);
  gulp.watch('./src/js/**/*.js', ['js']);
  gulp.watch('./src/images/*', ['images']);
});