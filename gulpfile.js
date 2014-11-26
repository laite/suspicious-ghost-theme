var gulp = require('gulp'),
    sass = require('gulp-sass'),
	minify = require('gulp-minify-css'),
    livereload = require('gulp-livereload'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
	gulp.src('./src/scss/*.scss')
		.pipe(sass())
		.pipe(autoprefixer({cascade: false}))
		.pipe(minify())
		.pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch(['**/*.hbs', './src/scss/*.scss'], ['sass', livereload.changed]);
});

