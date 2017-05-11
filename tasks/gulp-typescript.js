var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	env = require('./../gulpfile.env');

var typescript = require('typescript'),
	path = require('path');

var project = plugins.typescript.createProject('tsconfig.json', {
	typescript,
	outFile: env.isProd ? 'app.js' : undefined
});

gulp.task('typescript', function typescript() {
	var root = 'src/app';
	var glob = 'src/app/**/!(*.spec|*.d).ts';
    var jsonFiles = 'src/app/**/*.json';
    gulp.src(jsonFiles).pipe(gulp.dest('build/app')).pipe(gulp.dest(env.deployPath + '/app'));
	return gulp.src(glob, { since: gulp.lastRun('typescript') })
		.pipe(plugins.tslint())
		.pipe(plugins.tslint.report('verbose', {emitError: !env.watchMode}))
		.pipe(plugins.preprocess({ context: env }))
		.pipe(plugins.inlineNg2Template({ useRelativePaths: true }))
		.pipe(gulp.src(env.typings, { passthrough: true }))
		.pipe(plugins.if(env.isDev, plugins.sourcemaps.init()))
		.pipe(plugins.typescript(project)).on('error', function(){if(!env.watchMode){process.exit(1)}}).js
		.pipe(plugins.if(env.isProd, plugins.uglify({ mangle: false })))
		.pipe(plugins.if(env.isDev, plugins.sourcemaps.write({
			sourceRoot: path.join(process.cwd(), root)
		})))
		.pipe(plugins.size({ title: 'typescript' }))
		.pipe(gulp.dest('build/app')).pipe(gulp.dest(env.deployPath+'/app'))
});
