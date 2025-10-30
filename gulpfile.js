const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const compressImages = require('gulp-imagemin');
const watch = require('gulp-watch');
const uglify = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(compressImages())
        .pipe(gulp.dest('./dist/images'));
}


exports.default = gulp.parallel(styles, images, scripts);
exports.watch = function() {
    gulp.watch('dist/styles/**/*.scss', gulp.parallel(styles));
    gulp.watch('dist/images/**/*', images);
    gulp.watch('dist/js/**/*.js', gulp.parallel(scripts));
}