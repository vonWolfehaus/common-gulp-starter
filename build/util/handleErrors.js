var notify = require('gulp-notify');

module.exports = function() {

	var args = Array.prototype.slice.call(arguments);
	// Send error to notification center with gulp-notify
	notify.onError({
		message: "<%= error.plugin %>: <%= error.message %>",
		title: "Build error",
		showStack: true
	}).apply(this, args);

	// Keep gulp from hanging on this task
	this.emit('end');
};