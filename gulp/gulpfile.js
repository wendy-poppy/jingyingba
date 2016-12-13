var gulp = require("gulp");
var jade = require("gulp-jade");
var sass = require("gulp-sass");
var watch = require("gulp-watch");

gulp.task("default",["watch"],function(){

});

gulp.task("jade",function(){
    gulp.src("../jade/*.jade")
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest("../html/"))
});

gulp.task("sass",function(){
    gulp.src("../sass/*.scss")
        .pipe(sass({
            outputStyle: "expanded"
        }))
        .pipe(gulp.dest("../css/"))
});

gulp.task("js",function(){
    gulp.src("../js/*.js")
        .pipe(gulp.dest("../js/"))
})

gulp.task("watch",function(){
    gulp.watch("../jade/*.jade",["jade"])
    gulp.watch("../sass/*.scss",["sass"])
    gulp.watch("../js/*.js",["js"])
});

