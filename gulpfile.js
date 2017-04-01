var gulp = require('gulp');
var del = require('del');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

//transpiles .TS files after cleaning oldjs files
gulp.task('transpile', ['clean'], function () {
    var destDir =  '.';

    return gulp.src('*.ts')
        .pipe(ts(tsProject))
        .pipe(gulp.dest(destDir));
});

// Clean js files
gulp.task('clean', function() {
  return del(['demo-checkbox-ajax.js', 'checkbox-ajax.js']);
});