var gulp = require("gulp");
var babel = require("gulp-babel");

const babel_es6 =  () => {
  return gulp.src("src/index.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
}

exports.default = gulp.series(babel_es6)