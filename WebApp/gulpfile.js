'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    cssmin = require('gulp-minify-css'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    gulpLess = require("gulp-less"),
    flatten = require("gulp-flatten"),
    reload = browserSync.reload;

var streamqueue  = require('streamqueue');

var path = {
    build: {
        html: 'build/',
        htmlPartials: 'build/templates',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/',
        libs: 'build/libs/',
    },
    src: {
        html: 'src/*.html',
        htmlPartials: 'src/**/*.tmpl.html',
        js: 'src/**/*.js',
        style: 'src/styles/**/*.css',
        img: 'src/imgs/**/*.*',
        fonts: 'src/fonts/**/*.*',
        libs: 'bower_components/**/*.min.js'
    },
    watch: {
        html: 'src/*.html',
        htmlPartials: 'src/**/*.tmpl.html',
        js: 'src/**/*.js',
        style: 'src/styles/**/*.css',
        img: 'src/imgs/**/*.*',
        fonts: 'src/fonts/**/*.*',
        libs: 'bower_components/**/*.min.js'
    },
    clean: './build'
};

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: false,
    host: 'localhost',
    port: 2233,
    logPrefix: "Frontend_Devil"
};

gulp.task('html:build', function () {
    gulp.src(path.src.html) //Выберем файлы по нужному пути
		.pipe(concat('index.html'))
        // .pipe(rigger()) //Прогоним через rigger
        .pipe(gulp.dest(path.build.html)) //Выплюнем их в папку build
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});

gulp.task('htmlPartials:build', function () {
    gulp.src(path.src.htmlPartials) //Выберем файлы по нужному пути
        .pipe(flatten())
        .pipe(gulp.dest(path.build.htmlPartials)) //Выплюнем их в папку build
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});

gulp.task('js:build', function () {
    return streamqueue({ objectMode: true },
        gulp.src('src/scripts/app.js'),
        gulp.src([path.src.js,'!src/scripts/app.js'])
    )
        .pipe(concat('app.js'))//все файлы соберед в один с указанным именем
        .pipe(gulp.dest(path.build.js))//переложит файл по указанному пути
        .pipe(reload({stream: true}));// перегрузит
});

gulp.task('libs:build', function() {
    return streamqueue({ objectMode: true },
        gulp.src('bower_components/jquery/dist/jquery.js'),
        gulp.src('bower_components/angular/angular.js'),
        gulp.src('bower_components/bootstrap/dist/js/bootstrap.js'),
        gulp.src('bower_components/angular-ui-router/release/angular-ui-router.js'),
        gulp.src('bower_components/underscore/underscore.js'),
        gulp.src('bower_components/restangular/src/restangular.js'),
        gulp.src('path.src.libs')
    )
        .pipe(concat('libs.js'))
        .pipe(gulp.dest(path.build.libs))
        .pipe(reload({stream: true}));
});


gulp.task('style:build', function () {
    return streamqueue({ objectMode: true },
        gulp.src('bower_components/bootstrap/dist/css/*.css'),
        gulp.src('path.src.style')
    )
	    .pipe(concat('app.css'))
        .pipe(gulp.dest(path.build.css))//переложит файл по указанному пути
        .pipe(reload({stream: true}));
});

gulp.task('build', [
    'html:build',
    'htmlPartials:build',
    'js:build',
    'style:build',
    'libs:build'
]);

gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.htmlPartials], function(event, cb) {
        gulp.start('htmlPartials:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.libs], function(event, cb) {
        gulp.start('libs:build');
    });
});

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('default', ['build', 'webserver', 'watch']);