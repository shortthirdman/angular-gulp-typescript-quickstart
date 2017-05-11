'use strict';

var gulp = require('gulp'),
	del = require('del'),
	env = require('./../gulpfile.env');

gulp.task('clean', () => {
	return del(['docs', 'coverage', 'build', '.karma', '.protractor', env.deployPath], {force:true});
});
