var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	notify = require('gulp-notify');


gulp.task('minify', function () { // 执行js压缩
	//  Read Files --> Minify --> Write files 
	gulp.src('bundle.js') // gulp.src()函数用字符串匹配一个文件或者文件的编号（被称为“glob”）,然后创建一个对象流来代表这些文件
	//gulp.src()方法输入一个glob(比如匹配一个或多个文件的字符串)或者glob数组，然后返回一个可以传递给插件的数据流
	//Gulp使用node-glob来从你指定的glob里面获取文件
	//	例子:   
	 	// js/app.js 精确匹配文件
		// js/*.js 仅匹配js目录下的所有后缀为.js的文件
		// js/.js 匹配js目录及其子目录下所有后缀为.js的文件
		// !js/app.js 从匹配结果中排除js/app.js，这种方法在你想要匹配除了特殊文件之外的所有文件时非常管用
		// *.+(js|css) 匹配根目录下所有后缀为.js或者.css的文件
	 
		.pipe(uglify()) // 接受文件对象之后返回有新压缩源文件的文件对象
		.pipe(gulp.dest('build')); // 最后那些输出的文件被输入gulp.dest()函数，并保存下来
});

//数据流能够通过一系列的小函数来传递数据，这些函数会对数据进行修改，然后把修改后的数据传递给下一个函数。


//需要先安装gulp,gulp-jshint,gulp-uglify和gulp-concat。
gulp.task('js', function () {
   return gulp.src('js/*.js') // 让所有的文件匹配js/*.js（比如js目录下的所有JavaScript文件）
      .pipe(jshint())// 第一次执行JSHint只是给文件对象附加了jshint属性，并没有输出
      .pipe(jshint.reporter('default'))// 打印输出结果
      .pipe(uglify())// 压缩
      .pipe(concat('app.js'))// 合并成 app.js 文件
      .pipe(gulp.dest('build'));// 合并文件到该目录下
});

// build 代表 执行一系列的任务(注意: 没有完成的先后顺序).
gulp.task('build', ['css', 'js', 'imgs']);
// 为了确保一个任务在另一个任务执行前已经结束，可以将函数和任务数组结合起来指定其依赖关系.
gulp.task('css', ['greet'], function () {// 例如: 定义一个 CSS 任务, 在执行前需要检查 greet 任务是否已经执行完毕.
   // Deal with CSS here// 
});

// 执行 gulp 时, 默认的任务.
gulp.task('default', function () {
   // Your default task
});

gulp.task('watch', function () {
   gulp.watch('templates/*.tmpl.html', ['build']);

// OR 
   gulp.watch('templates/*.tmpl.html', function (event) {
	   console.log('Event type: ' + event.type); // added, changed, or deleted
	   console.log('Event path: ' + event.path); // The path of the modified file
	});


// OR 
	var watcher = gulp.watch('templates/*.tmpl.html', ['build']);
	watcher.on('change', function (event) {
		// end 在watcher结束时触发（这意味着，在文件改变的时候，任务或者回调不会执行）
		// error 在出现error时触发
		// ready 在文件被找到并正被监听时触发
		// nomatch 在glob没有匹配到任何文件时触发
	   console.log('Event type: ' + event.type); // added, changed, or deleted
	   console.log('Event path: ' + event.path); // The path of the modified file
	});

	// watcher.end() 停止watcher（以便停止执行后面的任务或者回调函数）
	// watcher.files() 返回watcher监听的文件列表
	// watcher.add(glob) 将与指定glob相匹配的文件添加到watcher（也接受可选的回调当第二个参数）
	// watcher.remove(filepath) 从watcher中移除个别文件
	 
	
});

var less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch');
// gulp 监听文件的修改动态.在文件被改动的时候执行一或多个任务.  例如 你可以保存 LESS 文件. 接着 Gulp 会自动把它转换为 CSS 并更新浏览器.
gulp.task('less', function() {
   gulp.src('less/*.less')
      .pipe(watch())
      .pipe(less())
      .pipe(gulp.dest('css'))
      .pipe(livereload());// 刷新 浏览器
});


