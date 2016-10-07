require('babel-register')({
  presets: [ 'es2015' ]
});

'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import jasmine from 'gulp-jasmine';
import JasmineConsoleReporter from 'jasmine-console-reporter';
import del from 'del';

// How should the jasmine report look
var reporter = new JasmineConsoleReporter({
    colors: 1,           // (0|false)|(1|true)|2
    cleanStack: 1,       // (0|false)|(1|true)|2|3
    verbosity: 4,        // (0|false)|1|2|(3|true)|4
    listStyle: 'indent', // "flat"|"indent"
    activity: false
});

// The source and destination directories
const io = {
  in: __dirname+'/'+'src',
  out: __dirname+'/'+'dist'
}

// The paths
const path = {
  scripts: '/static/scripts',
  styles: '/static/styles'
}

/* Watchers */
gulp.task('watch', () => {
  gulp.watch(io.in+path.scripts+'/**/*.js', ['scripts']);
})

// run tests (can also use npm test)
gulp.task('test', (cb) => {
  gulp.src(['tests/**/*.spec.js'])
    .pipe(jasmine({
        reporter: reporter
    }))
    cb();
});

// Process javascript
gulp.task('scripts', ['test'], () => {
  gulp.src(io.in+path.scripts+'/**/*.js')
  .pipe(babel())
  .pipe(gulp.dest(io.out+path.scripts))
});

// Update the main vulcan.js file
gulp.task('updateApp', ['scripts'], () => {
  gulp.src(io.out+path.scripts+'/vulcan.js')
  .pipe(gulp.dest('./'))
});

// Delete the destination directory
gulp.task('clean', function() {
  return del(io.out);
});
