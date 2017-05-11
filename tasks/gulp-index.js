'use strict';

var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	env = require('./../gulpfile.env');

var path = require('path');

gulp.task('index', () => {
	var css = ['build/css/*'];
	var libs = env.isProd ?
		['build/libs/*'] :
		env.paths.libs.injectLibs.map(lib => path.join('build/libs/', lib));

	var libSource = gulp.src(libs, { read: false });
    var cssSource = gulp.src(css, { read: false });

	return gulp.src('src/index.jsp')
		.pipe(plugins.inject(libSource, { ignorePath: 'build',
        transform : function (filePath) {
                var newPath = '.' + filePath;
                return '<script src="' + newPath  + '"></script>';
            } }))
        .pipe(plugins.inject(cssSource, { ignorePath: 'build',
        transform : function (filePath) {
                var newPath = '.' + filePath;
                return '<link rel="stylesheet" href="' + newPath  + '">';
            } }))   
		.pipe(plugins.preprocess({ context: env }))
		.pipe(gulp.dest('build')).pipe(gulp.dest(env.deployPath));
});
