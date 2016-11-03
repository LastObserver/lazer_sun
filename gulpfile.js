var pug = require('gulp-pug');

var scss = require('gulp-sass');

var gulp = require('gulp');

var browserSync = require('browser-sync');

var reload = browserSync.reload;

var watch = require('gulp-watch')

var path = {
	src: {
		pug: './src/html/*.pug',
		scss: './src/css/*.scss',
		js: './src/js/*.js'
	},
	build: {
		html: './build/html/',
		css: './build/css/',
		js: './build/js/'
	},
	watch: {
		pug: './src/html/*.pug',
		scss: './src/css/*.scss',
		js: './src/js/*.js'
	}
};

var server = {
	server: {
		baseDir: "./build/"
	}
};

gulp.task('html',function(){
	gulp.src(path.src.pug)
		.pipe(pug({pretty: true}))
		.pipe(gulp.dest(path.build.html))
		.on('end',browserSync.reload)
});

gulp.task('css',function(){
	gulp.src(path.src.scss)
		.pipe(scss({pretty: true}))
		.pipe(gulp.dest(path.build.css))
		.on('end',browserSync.reload)
});

gulp.task('js',function(){
	gulp.src(path.src.js)
		.pipe(gulp.dest(path.build.js))
		.on('end',browserSync.reload)
});

gulp.task('webserver',function(){
	browserSync({
		server: {
			baseDir: "./build/"
		}
	});
});

gulp.task('watch',function(){
	watch([path.watch.pug], function(event,cb){
		gulp.start('html');
	});
	watch([path.watch.scss],function(event,cb){
		gulp.start('css');
	});
	watch([path.watch.js],function(event,cb){
		gulp.start('js');
	});
});

gulp.task('dev',function(){
	gulp.start('html','css','js')
})

gulp.task('default',['dev','watch','webserver'])