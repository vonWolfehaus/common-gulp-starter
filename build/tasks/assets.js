var gulp = require('gulp');
var ncp = require('ncp').ncp;

var config = require('../config.js');
var handleErrors = require('../util/handleErrors.js');

gulp.task('assets', function() {
	ncp(config.src+'img', config.dest+'img', handleErrors);
	// ncp(config.src+'sfx', config.dest+'sfx', handleErrors);
});