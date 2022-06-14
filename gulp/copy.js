const path = require('./path/path.js');

module.exports = function () {
	$.gulp.task('copy', (done) => {
		return $.gulp.src(path.path.build.style + '/**')
			.pipe($.gulp.dest(path.path.build.vue))
		done()
	})
}
