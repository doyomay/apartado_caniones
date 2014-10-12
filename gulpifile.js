var gulp = require('gulp');
var stylus = require('gulp-stylus');
var connect = require('gulp-connect');
var historyApiFallback = require('connect-history-api-fallback');

gulp.task('css', function () {
gulp.src('./styles/**/*.styl')
.pipe(stylus({compress: true}))
.pipe(gulp.dest('./css'));
.pipe(connect.reload()); // Más adelante explicamos por qué
});

gulp.task('webserver', function() {
  connect.server({
    root: './app',
    hostname: '0.0.0.0',
    port: 9000,
    livereload: true,
    middleware: function(connect, opt) {
      return [ historyApiFallback ];
    }
  });
});