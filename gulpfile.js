var pug = require('gulp-pug');

var gulp = require('gulp');

var browserSync = require('browser-sync');

var reload = browserSync.reload;

var watch = require('gulp-watch')

var path = {
	src: {
		pug: './src/*.pug'
	},
	build: {
		html: './build/html/'
	},
	watch: {
		pug: './src/*.pug'
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

gulp.task('webserver',function(){
	browserSync({
		server: {
			baseDir: "./build/html/"
		}
	});
});

gulp.task('watch',function(){
	watch([path.watch.pug], function(event,cb){
		gulp.start('html');
	});
});

gulp.task('default',['html','watch','webserver']);