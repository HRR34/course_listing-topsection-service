const gulp = require('gulp'),
  gzip = require('gulp-gzip'),
  s3 = require('gulp-s3')
  { awsConfig } = require('./config.js');
  
  gulp.task('gulp_s3', () => {
    gulp.src('public/**')
      .pipe(gzip())
      .pipe(s3(awsConfig));
  });
  
  gulp.task('watch:s3', () => {
    gulp.watch('./public/**', ['gzip_s3']);
  });