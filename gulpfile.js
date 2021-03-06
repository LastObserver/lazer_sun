var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var pngquant = require('imagemin-pngquant');
var rimraf = require('rimraf');
var $ = require('gulp-load-plugins')();

// var pug = require('gulp-pug');
// var scss = require('gulp-sass');
// var watch = require('gulp-watch');
// var prefixer = require('gulp-autoprefixer');
// var uglify = require('gulp-uglify');
// var plumber = require('gulp-plumber');
// var sourcemaps = require('gulp-sourcemaps');
// var cssnano = require('gulp-cssnano');
// var imagemin = require('gulp-imagemin');
// var newer = require('gulp-newer');
// var rigger = require('gulp-rigger');

var path = {
	src: {
		pug: './src/**/*.pug',
		scss: './src/css/*.scss',
		js: './src/js/*.js',
		images: './src/images/**/*.*'
	},
	build: {
		html: './build/',
		css: './build/css/',
		js: './build/js/',
		images: './build/images/'
	},
	watch: {
		pug: './src/**/*.pug',
		scss: './src/css/**/*.scss',
		js: './src/js/**/*.js',
		images: './src/images/**/*.*'
	},
	clean: './build'
};

var server = {
	server: {
		baseDir: "./build/"
	}
};

gulp.task('html',function(){
	gulp.src(path.src.pug)
		.pipe($.plumber())
		.pipe($.pug({pretty: true}))
		.pipe(gulp.dest(path.build.html))
		.on('end',browserSync.reload)
});

gulp.task('css:build',function(){
	gulp.src(path.src.scss)
		.pipe($.plumber())
		.pipe($.sass().on('error',scss.logError))
		.pipe($.autoprefixer())
		.pipe($.cssnano({
			zindex:false
		}))
		.pipe(gulp.dest(path.build.css))
});

gulp.task('css:dev',function(){
	gulp.src(path.src.scss)
		.pipe($.plumber())
		.pipe($.sourcemaps.init())
		.pipe($.sass().on('error',$.sass.logError))
		.pipe($.sourcemaps.write())
		.pipe(gulp.dest(path.build.css))
		.on('end',browserSync.reload)
});

gulp.task('js:build',function(){
	gulp.src(path.src.js)
		.pipe($.plumber())
		.pipe($.rigger())
		.pipe(gulp.dest(path.build.js))
		.pipe($.uglify())
});

gulp.task('js:dev',function(){
	gulp.src(path.src.js)
		.pipe($.plumber())
		.pipe($.rigger())
		.pipe(gulp.dest(path.build.js))
		.on('end',browserSync.reload)
});

gulp.task('images',function(){
	gulp.src(path.src.images)
		.pipe($.newer(path.src.images))
		.pipe($.imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()],
			interlaced: true,
			options: {
				cache: true
			}
		}))
		.pipe(gulp.dest(path.build.images));
})

gulp.task('clean',function(cb){
	rimraf(path.clean,cb);
});


gulp.task('webserver',function(){
	browserSync({
		server: {
			baseDir: "./build/"
		}
	});
});

gulp.task('watch',function(){
	$.watch([path.watch.pug], function(event,cb){
		gulp.start('html');
	});
	$.watch([path.watch.scss],function(event,cb){
		gulp.start('css:dev');
	});
	$.watch([path.watch.js],function(event,cb){
		gulp.start('js:dev');
	});
	$.watch([path.watch.images],function(event,cb){
		gulp.start('images');
	});
});

gulp.task('dev',function(){
	gulp.start('html','css:dev','js:dev','images')
})

gulp.task('build',function(){
		gulp.start('html','css:build','js:build','images')
})

gulp.task('default',['dev','watch','webserver'])
