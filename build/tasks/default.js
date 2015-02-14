var gulp = require('gulp');
var argv = require('yargs').argv;

var config = require('../config.js');

var dist = config.release = !!argv.dist;
console.log('_________________________________________');
console.log('');
console.log('    Building for distribution: ' + dist);
console.log('');

gulp.task('default', ['images', 'lib', 'sass', 'watch', 'code', 'html']);