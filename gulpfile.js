const {src, dest, series, watch} = require('gulp');
//add variables depending on packages you use
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const include = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const sync = require('browser-sync').create();

function html() {
	return src('src/**.html') //files we want to process
		.pipe(include({
			prefix: '@@'
		}))
		.pipe(dest('dist'))
}

function scss() {
	return src('src/styles/**.scss')
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(csso())
		.pipe(concat('index.css'))
		.pipe(dest('dist'))
}


function serve() {
	sync.init({
		server: './dist'
	})

	watch('src/**.html', series(html)).on('change', sync.reload)
	watch('src/scss/**.scss', series(scss)).on('change', sync.reload)
}

// exports.serve = series(scss, html, serve);
exports.build = series(scss, html) //does all the above in the written order