
/**
 * Js入口文件 && 编译生成的文件
 */
const INDEX_JS = 'app.js';
const INDEX_JS_BUILD = 'app.js';

/**
 * Less入口文件 && 编译生成的文件
 */
const INDEX_CSS = 'app.less';
const INDEX_CSS_BUILD = 'app.css';

/**
 * 服务器 端口 && 目录
 */
const ROOT_PORT = 2929
const ROOT_DIR = 'dist/'

/**
 * 源码目录
 */
const src = {
	root: 'src/',
	html: 'src/*.html',
	css: 'src/css/'+INDEX_CSS,
	js: 'src/js/'+INDEX_JS,
	img: 'src/img/**/*.*',
	font: 'src/fonts/**/*.*'
}

/**
 * 打包生成目录
 */
const dist = {
	root: 'dist/',
	css: 'dist/css',
	js: 'dist/js',
	img: 'dist/img',
	font: 'dist/fonts'
}

/**
 * 主要依赖
 */
import gulp from 'gulp'
import rename from 'gulp-rename'
import plumber from 'gulp-plumber'
// 遇到错误不终止
import cached from 'gulp-cached'
// 缓存对比，提高速度

/**
 * 命令行选项
 */
import gulpif from 'gulp-if'
import args from "yargs"
args.option('watch',{
  boolean: true,
  default: false,
  describe: 'watch all files'
})
let cmd = args.argv


/**
 * 服务器
 */
import connect from "gulp-connect"
gulp.task('server', (cb)=>{
	if(!cmd.watch) return cb();
	connect.server({
		root: ROOT_DIR,
		port: ROOT_PORT,
		livereload: true
	})
})



/**
 * 清空Dist目录
 */
const del = require('del')
gulp.task('clear', function () {
  del([
  	dist.root
  ]);
});


/**
 * Html 配置
 */
import ejs from 'gulp-ejs'

gulp.task('html', () => {
	gulp.src(src.html)
			.pipe(plumber())
			.pipe(ejs())
			.pipe(gulp.dest(dist.root))
			.pipe(gulpif(cmd.watch, connect.reload()))
})


/**
 * 复制资源文件
 */
import imagemin from 'gulp-imagemin'
gulp.task('copyStatic', () => {
	gulp.src(src.font)
			.pipe(gulp.dest(dist.font))
			console.log('copy static->font END!')
	gulp.src(src.img)
			.pipe(gulp.dest(dist.img))
			.pipe(gulpif(cmd.watch, connect.reload()))
			console.log('copy static->img END!')
})


/**
 * Less && Css 配置
 */
import less from 'gulp-less'
import autofixer from 'gulp-autoprefixer'
import cssmin from 'gulp-clean-css'
gulp.task('css', () => {
	gulp.src(src.css)
			.pipe(plumber())
			.pipe(less())
			.pipe(autofixer({
            browsers: ['last 2 versions'],
            cascade: false
       }))
			.pipe(cssmin())
			.pipe(rename(INDEX_CSS_BUILD))
			.pipe(gulp.dest(dist.css))
			.pipe(gulpif(cmd.watch, connect.reload()))
})


/**
 * Js 打包配置
 */
import named from 'vinyl-named'
import gulpwebpack from 'webpack-stream'
import webpackconfig from './webpack.config.js'
gulp.task('js', () => {
	gulp.src(src.js)
			.pipe(plumber())
			.pipe(cached('jsting'))
			.pipe(gulpwebpack(webpackconfig),(err, stats) => {
        if ( err ) throw new gutil.PluginError("webpack",err);
        log(`Fininshed '${colors.cyan('js')}'`,stats.toSting({ chunks: false }))
      })
      .pipe(rename(INDEX_JS_BUILD))
      .pipe(gulp.dest('dist/js'))
      .pipe(gulpif(cmd.watch, connect.reload()))
})


/**
 * Watch 配置
 */
gulp.task('watch', (cb) => {
	if(!cmd.watch) return cb();
	gulp.watch(src.html, ['html']);
	gulp.watch('src/**/*.ejs', ['html']);
	gulp.watch('src/css/**/*.*', ['css']);
	gulp.watch('src/js/**/*.*', ['js']);
	gulp.watch('src/img/**/*.*', ['copyStatic']);
	gulp.watch('src/img/**/*.*', ['clear']);
})



/**
 * 配置任务顺序
 */
import gulpSequence from "gulp-sequence"
gulp.task('default', gulpSequence(
	'copyStatic','css','js','html',
	['watch','server']
))