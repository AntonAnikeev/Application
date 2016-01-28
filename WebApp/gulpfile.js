'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    //sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    //imagemin = require('gulp-imagemin'),
    //pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

var streamqueue  = require('streamqueue');

var path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/',
        libs: 'build/libs/',
    },
    src: {
        html: 'src/*.html',
        js: 'src/scripts/**/*.js',
        style: 'src/styles/**/.css',
        img: 'src/imgs/**/*.*',
        fonts: 'src/fonts/**/*.*',
        libs: 'bower_components/**/*.min.js'
    },
    watch: {
        html: 'src/*.html',
        js: 'src/scripts/**/*.js',
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

gulp.task('js:build', function () {

    gulp.src(path.src.js)
        .pipe(concat('app.min.js'))//все файлы соберед в один с указанным именем
        .pipe(uglify())//офусцирует файл
        .pipe(gulp.dest(path.build.js))//переложит файл по указанному пути
        .pipe(reload({stream: true}));// перегрузит
    //gulp.src(path.src.js) //Найдем наш main файл
    //    //.pipe(rigger()) //Прогоним через rigger
    //    //.pipe(sourcemaps.init()) //Инициализируем sourcemap
    //    //.pipe(uglify()) //Сожмем наш js
    //    //.pipe(sourcemaps.write()) //Пропишем карты
    //    //.pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
    //    //.pipe(reload({stream: true})); //И перезагрузим сервер
    //    .pipe(uglify('app.min.js', {
    //        outSourceMap: true
    //    }))
    //    .pipe(gulp.dest(path.build.js))
    //
});

//gulp.task('libs:build', function () {
//
//    gulp.src(path.src.libs)
//        .pipe(concat('libs.min.js'))//все файлы соберед в один с указанным именем
//        //.pipe(uglify())//офусцирует файл
//        .pipe(gulp.dest(path.build.libs))//переложит файл по указанному пути
//        .pipe(reload({stream: true}));// перегрузит
//    //gulp.src(path.src.js) //Найдем наш main файл
//    //    //.pipe(rigger()) //Прогоним через rigger
//    //    //.pipe(sourcemaps.init()) //Инициализируем sourcemap
//    //    //.pipe(uglify()) //Сожмем наш js
//    //    //.pipe(sourcemaps.write()) //Пропишем карты
//    //    //.pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
//    //    //.pipe(reload({stream: true})); //И перезагрузим сервер
//    //    .pipe(uglify('app.min.js', {
//    //        outSourceMap: true
//    //    }))
//    //    .pipe(gulp.dest(path.build.js))
//    //
//});

gulp.task('libs:build', function() {
    return streamqueue({ objectMode: true },
        gulp.src('bower_components/jquery/dist/jquery.js'),
        gulp.src('bower_components/angular/angular.js'),
        gulp.src('path.src.libs')
    )
        .pipe(concat('libs.min.js'))
        .pipe(gulp.dest(path.build.libs))
        .pipe(reload({stream: true}));
});


gulp.task('style:build', function () {
    gulp.src(path.src.style) //Выберем наш main.scss
	    .pipe(concat('app.css'))
		.pipe(uglify())//офусцирует файл
        .pipe(gulp.dest(path.build.css))//переложит файл по указанному пути
        .pipe(reload({stream: true}));
        // .pipe(sourcemaps.init()) //То же самое что и с js
        //.pipe(sass()) //Скомпилируем
        // .pipe(prefixer()) //Добавим вендорные префиксы
        // .pipe(cssmin()) //Сожмем
        // .pipe(sourcemaps.write())
        // .pipe(gulp.dest(path.build.css)) //И в build
        // .pipe(reload({stream: true}));
});

gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'libs:build'
    //'fonts:build',
    //'image:build'
]);

gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
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
    //watch([path.watch.img], function(event, cb) {
    //    gulp.start('image:build');
    //});
    //watch([path.watch.fonts], function(event, cb) {
    //    gulp.start('fonts:build');
    //});
});

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('default', ['build', 'webserver', 'watch']);