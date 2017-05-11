'use strict';

var gulp = require('gulp');

var env = require('./../gulpfile.env');

gulp.task('watch', () => {
	env.watchMode = true;
	gulp.watch('src/index.jsp', gulp.series('index'));
	gulp.watch('src/scss/**/*.scss', gulp.series('scss'));
	gulp.watch('src/images/**/*.{png,jpg,gif}', gulp.series('images'));
	// gulp.watch('src/app/**/*.spec.ts', gulp.series('unit'));
	// gulp.watch('src/app/**/!(*.spec).{ts,css,html}', gulp.series('typescript', 'unit'));
	gulp.watch('src/app/**/!(*.spec).{ts,css,html}', gulp.series('typescript'));
	gulp.watch(['src/fonts/**/*.*', './node_modules/font-awesome/fonts/**/*.*'], gulp.series('fonts'));
});
