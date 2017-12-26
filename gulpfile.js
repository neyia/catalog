
var gulp = require('gulp');
var processhtml = require('gulp-processhtml');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var autoprefixer = require('gulp-autoprefixer');
var less = require('gulp-less');
var path = require('path');
var watch = require('gulp-watch');

var config = {
    server: {
        baseDir: 'build'
    },
    tunnel: true,
    host: 'localhost',
    port: 8080,
    open: true,
    notify: false,
    injectChanges: true,
    logPrefix: 'Test catalog'
};

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('libs', function () {
    return gulp.src('src/libs/*')
        .pipe(gulp.dest('build/libs/'))
        .pipe(gulp.dest('build/libs/')).pipe(reload({stream: true}));
});

gulp.task('images', function () {
    return gulp.src('src/images/*.png')
        .pipe(gulp.dest('build/images/'))
        .pipe(gulp.dest('build/images/')).pipe(reload({stream: true}));
});

gulp.task('less', function () {
    return gulp.src('src/*.less')
        .pipe(less({
            paths: [path.join('src/', 'less', 'includes')]
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('build/'))
        .pipe(reload({stream: true}));
});

gulp.task('html', function () {
    return gulp.src('src/*.html')
        .pipe(processhtml({
            recursive: true
        }))
        .pipe(gulp.dest('build/'))
        .pipe(reload({stream: true}));
});
gulp.task('js', function () {
    return gulp.src('src/scripts/*.js')
        .pipe(processhtml({
            recursive: true
        }))
        .pipe(gulp.dest('build/scripts'))
        .pipe(reload({stream: true}));
});
gulp.task('watch', ['webserver'], function () {
    watch('*.html', function (event, cb) {
        gulp.start('html');
    });
    watch(['styles.less'], function (event, cb) {
        gulp.start('less');
    });
    watch(['banner.js'], function (event, cb) {
        gulp.start('js');
    });
});


