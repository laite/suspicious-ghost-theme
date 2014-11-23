var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload');

/*
 * gulp.task('compile-less', function() {
 *   gulp.src('./less/jkl.less')
 *     .pipe(less())
 *     .pipe(gulp.dest('./public'));
 * });
 */

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch(['**/*.hbs', './**/*.css'], [livereload.changed]);
});

