'use strict';
var gulp = require('gulp'),
	env = require('./../gulpfile.env'),
	plugins = require('gulp-load-plugins')();


let fonts = ['src/fonts/**/*.*', './node_modules/font-awesome/fonts/**/*.*'];

gulp.task('fonts', () => {
	return gulp.src(fonts)
	// Incremental build - only pass fonts that have changed
	// Compares files against the ones in the dest folder
		.pipe(plugins.changed('build/fonts'))
		.pipe(plugins.size({ title: 'fonts' }))
		.pipe(gulp.dest('build/fonts')).pipe(gulp.dest(env.deployPath + '/fonts'));;
});