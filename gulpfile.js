// Basic Gulp File
//
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    browserify = require('browserify'),
    source = require("vinyl-source-stream"),
    watchify = require('watchify')
    ;

var config = {
    stylesPath: './src/styles',
    scriptsPath: './src/scripts',
    fontsPath: './src/fonts',
    assetsPath: './public/assets'
}
gulp.task('fonts', function() {
    return gulp.src(config.fontsPath + '/**.*')
        .pipe(gulp.dest(config.assetsPath + '/fonts/'));
});

gulp.task('styles', function() {
    return sass(config.stylesPath,{
        loadPath: [
            config.stylesPath + '/app'
        ]        
    }) 
    .on('error', function (err) {
      console.error('Error!', err.message);
   })
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(minifycss())    
    .pipe(gulp.dest(config.assetsPath + '/css/'))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('default', function() {
  browserifyShare();
});

function browserifyShare(){
  var b = browserify({
    cache: {},
    packageCache: {},
    fullPaths: true
  });
  
  b = watchify(b);
  b.on('update', function(){
    bundleShare(b);
  });
  
  b.add(config.scriptsPath + '/app.js');
  bundleShare(b);
}

function bundleShare(b) {
  b.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest(config.assetsPath + '/js'));
}