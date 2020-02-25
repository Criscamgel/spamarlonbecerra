const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function css(){
    return gulp
    .src('./src/scss/*.scss')
    .pipe(autoprefixer({
        overrideBrowserlist: ['last 2 version'],
        cascade: false
    }))
    .pipe(sass({
        outputStyle: 'expanded', //nested, compact, compressed
    }))
    .pipe(gulp.dest('./src/css'))

}

// Cada vez que hagas un cambio vas a ejecutar el paso de css a scss

function watchFiles(){
    gulp.watch('./src/scss/*.scss', css)
}

//Registrar funciones como tareas

gulp.task('css', css)
gulp.task('watch', watchFiles)