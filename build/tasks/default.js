var gulp = require('gulp');

var seperator = '_________________________________________';
var dist = config.release = !!argv.dist;
console.log(seperator);
console.log('');
console.log('    Building for distribution: ' + dist);
console.log(seperator);
// 'images', 
gulp.task('default', ['assets', 'lib', 'sass', 'watch', 'code', 'html']);