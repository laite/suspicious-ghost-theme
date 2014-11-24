var gulp = require('gulp'),
    sass = require('gulp-sass'),
	minify = require('gulp-minify-css'),
    livereload = require('gulp-livereload');

gulp.task('sass', function() {
	gulp.src('./src/scss/*.scss')
		.pipe(sass())
		.pipe(minify())
		.pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch(['**/*.hbs', './src/scss/*.scss'], ['sass', livereload.changed]);
});

