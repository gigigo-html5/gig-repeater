var gulp = require('gulp');
var replace = require('gulp-replace');
var header = require('gulp-header');
var pkg = require('./package.json');
var dateFormat = require('dateformat');

var banner = ['<!--',
  ' <%= pkg.description %>',
  ' @version v<%= pkg.version %> - '+ dateFormat(new Date(), "yyyy-mm-dd") +'',
  ' @link <%= pkg.homepage %>' ,
  ' @author <%= pkg.author %>' ,
  ' @license MIT License, http://www.opensource.org/licenses/MIT\n' ,
  ' -->',
  ''].join('\n');

gulp.task('release', function(){
    return gulp.src(['src/*'])
        .pipe(replace('bower_components/', ''))
        .pipe(header(banner, { pkg : pkg } ))
        .pipe(gulp.dest('./'));
});
