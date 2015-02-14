var del = require('del');
var config = require('../config.js');

gulp.task('clean', function() {
	return del(config.dest+'**', {force:true});
});