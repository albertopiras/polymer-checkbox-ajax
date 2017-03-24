var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');


gulp.task('transpile', function () {
    var destDir =  '.';

    return gulp.src('*.ts')
        .pipe(ts(tsProject))
        .pipe(gulp.dest(destDir));
});