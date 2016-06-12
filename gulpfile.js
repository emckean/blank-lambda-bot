var gulp = require('gulp');
var zip = require('gulp-zip');
var del = require('del');
var install = require('gulp-install');
var runSequence = require('run-sequence');
var awsLambda = require("node-aws-lambda");
var jshint = require('gulp-jshint');
 
gulp.task('clean', function() {
  return del(['./dist', './dist.zip']);
});
 
gulp.task('js', function() {
  //this is the name of your main function file
  return gulp.src('index.js')
    .pipe(gulp.dest('dist/'));
});
 
gulp.task('node-mods', function() {
  return gulp.src('./package.json')
    .pipe(gulp.dest('dist/'))
    .pipe(install({production: true}));
});
 
gulp.task('zip', function() {
  return gulp.src(['dist/**/*', '!dist/package.json'])
    .pipe(zip('dist.zip'))
    .pipe(gulp.dest('./'));
});
//this task doesn't run in the deploy pipeline
gulp.task('lint', function() {
  return gulp.src('index.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
}); 
 
gulp.task('upload', function(callback) {
  awsLambda.deploy('./dist.zip', require("./lambda-config.js"), callback);
});
 
gulp.task('deploy', function(callback) {
  return runSequence(
    ['clean'],
    ['js', 'node-mods'],
    ['zip'],
    ['upload'],
    callback
  );
});