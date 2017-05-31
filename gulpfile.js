/**
 * Created by Administrator on 2017/5/31.
 */
var gulp =require("gulp");
var less = require("less");
gulp.task('myless',function () {
    gulp.src('demo/style/*.less')
        .pipe(plugins.less())
        .pipe(gulp.dest('demo/style/'));
});
gulp.task("mywatch",function () {
    gulp.watch("demo/style/*.less",["myless"])
});