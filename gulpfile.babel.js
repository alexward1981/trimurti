'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import jasmine from 'gulp-jasmine';

const src = 'src/'
const dest = 'dist/'

gulp.task('scripts', () => {
  return gulp.src( src + 'static/scripts/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(dest + 'static/scripts/'))
});
