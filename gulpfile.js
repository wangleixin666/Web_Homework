var gulp = require('gulp'),
	jshint = require("gulp-jshint");
	minifyCss = require("gulp-minify-css");
    uglify = require("gulp-uglify");
    imagemin = require('gulp-imagemin');
	concat = require("gulp-concat");
    less = require('gulp-less');
    livereload = require('gulp-livereload');
    
//js 代码校验(jshint)
gulp.task('jsLint', function () {
    gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter()); // 输出检查结果
});  

//css压缩 
gulp.task('minify-css', function () {
    gulp.src('css/*.css') // 要压缩的css文件
    .pipe(minifyCss()) //压缩css
    .pipe(gulp.dest('dist/css'));//最终路径为dist/CSS/..
});

//js 压缩 
gulp.task('minify-js', function () {
    gulp.src('js/*.js') // 要压缩的js文件
    .pipe(uglify())  //使用uglify进行压缩,更多配置请参考：
    .pipe(gulp.dest('dist/js')); //压缩后的路径
});

//图片压缩
gulp.task('minify-img', function () {
    gulp.src('images/*.{png,jpg,gif}')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

//合并js文件
gulp.task('concat1', function () {
    gulp.src('js/*.js')  //要合并的文件
    .pipe(concat('all.js'))  // 合并匹配到的js文件并命名为 "all.js"
    .pipe(gulp.dest('dist/js'));
});

//合并css文件
gulp.task('concat2', function () {
    gulp.src('css/*.css')  //要合并的文件
    .pipe(concat('all.css'))  // 合并匹配到的js文件并命名为 "all.js"
    .pipe(gulp.dest('dist/css'));
});

//资源嵌入（html, js，css，图片内联）


//自动刷新
gulp.task('less', function() {
  gulp.src('less/*.less')
    .pipe(less())
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen(); //要在这里调用listen()方法
  gulp.watch('less/*.less', ['less']);
});