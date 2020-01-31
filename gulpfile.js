const gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyjs = require('gulp-js-minify'),
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean'),
    browserSync = require('browser-sync').create(),
    rigger = require('gulp-rigger'),
    newer = require('gulp-newer');

const cleanDist = () => {
    return gulp.src('./dist', {read: false})
        .pipe(clean());
};
const scssBuild = () => {
    return gulp.src('./src/scss/style.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(browserSync.stream())
};
const jsBuild = () => {
    return gulp.src('./src/js/main.js')
        .pipe(minifyjs())
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'))
        .pipe(browserSync.stream())
};
const imagesBuild = () => {
    return gulp.src('./src/img/**/*.*')
        .pipe(newer('./dist/img/'))
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 5
        }))
        .pipe(gulp.dest('./dist/img/'));
};
const buildHTML = () => {
    return gulp.src('./src/index.html')
        .pipe(rigger())
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream())
};
const watch = () => {
    gulp.watch('./src/scss/**/*.scss', gulp.series(scssBuild));
    gulp.watch('./src/**/*.html', gulp.series(buildHTML));
    gulp.watch('./src/js/*.js', gulp.series(jsBuild));
    browserSync.init({
        server: {
            baseDir: "./dist",
            index: "index.html"
        }
    });
};
gulp.task('dev', watch);
gulp.task('build', gulp.series(scssBuild, jsBuild, imagesBuild, buildHTML));