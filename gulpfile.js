const gulp = require('gulp');
const copyfiles = require('copyfiles');

/**
 * Inline external HTML and SCSS templates into Angular component files.
 * @see: https://github.com/ludohenin/gulp-inline-ng2-template
 */
const ASSETS_SRC = './projects/ngx-carousel/src/assets/**/*';
const ASSETS_DIST = 'dist/ngx-carousel';

gulp.task('copy-assets', (callback) => {
    copyfiles([ASSETS_SRC, ASSETS_DIST], 3, callback);
});

gulp.task('copy-assets:watch', gulp.series('copy-assets', () => {
    gulp.watch(ASSETS_SRC, gulp.series('copy-assets'));
}));
