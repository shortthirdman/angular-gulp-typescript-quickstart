'use strict';

var gulp = require('gulp'),
	env = require('./../gulpfile.env');
	
gulp.task('systemjs.config', () => {
	return gulp.src('systemjs.config.js').pipe(gulp.dest('build')).pipe(gulp.dest(env.deployPath));
});