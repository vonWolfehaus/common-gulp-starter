var fs = require('fs-extra')

module.exports = {
	copy: function(source, target, cb) {
		fs.copy(source, target, function(err) {
			if (cb && !cbCalled) {
				cb(err);
				cbCalled = true;
			}
		})
	}
}