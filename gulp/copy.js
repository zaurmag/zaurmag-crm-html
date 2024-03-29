const path = require('./path/path.js')

module.exports = function () {
	$.gulp.task('copy', () => {
		return $.gulp.src(`${path.path.build.style}**/*`) // ${path.path.build.root}**/!(*.html)
			.pipe($.gulp.dest(path.path.copyPath))
	})
}
