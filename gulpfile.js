/**
 * Created by Administrator on 2017/5/31.
 */
var gulp      = require("gulp");
var less      = require("gulp-less");
var $         = require('gulp-load-plugins')();//加载插件

gulp.task('test',function () {
 return  gulp.src('demo/less/**.less')
        .pipe($.less())
        .pipe(gulp.dest('demo/css'));
});

gulp.task("auto",function () {
    gulp.watch("demo/less/**.less",["test"])
});