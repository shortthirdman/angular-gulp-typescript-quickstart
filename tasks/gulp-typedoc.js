'use strict';

var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	env = require('./../gulpfile.env');

gulp.task('typedoc', () => {
	return gulp.src([[].concat([
		'src/app/**/!(*.spec).ts'],
		env.typings)
	]).pipe(plugins.typedoc({
		module: 'commonjs',
		target: 'es5',
		experimentalDecorators: true,
		out: 'docs'
	}));
});
