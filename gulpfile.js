const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');

const DIST_DIR = './dist';
const FILENAME = 'angular-element-viewport.js';
const FILENAME_MIN = 'angular-element-viewport.min.js';

const JS_FILES = [
    './src/*.js',
    './src/angular-directive.js'
];

/* tasks */

gulp.task('concat', function() {
    gulp.src(JS_FILES)
        .pipe(concat(FILENAME))
        .on('error', errorHandler)
        .pipe(gulp.dest(DIST_DIR));
});

gulp.task('minify', function() {
    const filePath = getDistFilePath();

    gulp.src(filePath)
        .pipe(minify({
            ext: {
                src:'.js',
                min:'.min.js'
            }
        }))
        .on('error', errorHandler)
        .pipe(gulp.dest(DIST_DIR));
});

gulp.task('watch', function () {
    gulp.watch(JS_FILES, ['build']);
});

gulp.task('build', [ 'concat', 'minify' ]);
gulp.task('default', [ 'watch' ]);

/* auxiliar functions */

const errorHandler = error => {
    console.log(error.toString());
};

const getDistFilePath = () => {
    return DIST_DIR + '/' + FILENAME;
};
