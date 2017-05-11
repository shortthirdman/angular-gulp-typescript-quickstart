'use strict';

var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	env = require('./../gulpfile.env');

var path = require('path');

gulp.task('scss', () => {
	return gulp.src('src/**/*.{scss,sass}',{base: 'src/scss/'})
		.pipe(plugins.sassLint({ config: '.sass-lint.yml' }))
		.pipe(plugins.sassLint.format())
		.pipe(plugins.sassLint.failOnError()).on('error', function(){if(!env.watchMode){process.exit(1)}})
		.pipe(plugins.if(env.isDev, plugins.sourcemaps.init()))
		.pipe(plugins.sass())
		.pipe(plugins.if(env.isDev, plugins.sourcemaps.write()))
		.pipe(plugins.size({ title: 'sass' }))
		.pipe(gulp.dest('build/css')).pipe(gulp.dest(env.deployPath+'/css'));
});
