var pug = require('gulp-pug');

var gulp = require('gulp');

var browserSync = require('browser-sync');

var reload = browserSync.reload;

var watch = require('gulp-watch')

var path = {
	src: {
		pug: './src/html/*.pug'
		scss: './src/css/*.scss'
	},
	build: {
		html: './build/html/'
		css: './build/css/'
	},
	watch: {
		pug: './src/html/*.pug'
		scss: './src/css/*.scss'
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
})

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
	watch([path.watch.scss],function(event.cb){
		gulp.start('css');
	});
});

gulp.task('default',['html','watch','webserver']);