# Common(js) Gulp Starter

Like everyone else, my projects tend to be structured a certain way, according to the tools I prefer, even using a common folder structure (which is included in this Starter). This is my current setup:

- [browserify](http://browserify.org/)
- [watchify](https://github.com/substack/watchify): _much_ faster builds
- [cached](https://github.com/wearefractal/gulp-cached): faster linting
- [notify](): obvious hand-waving on errors so you don't need to always keep the ugly cl in view
- [Riot](https://github.com/muut/riotjs): I like it better than React
- Sass (with source maps, [autoprefixer](https://github.com/postcss/autoprefixer), and minifyCSS)
- HTML parser for if-defs
- [image optimization](https://www.npmjs.com/package/gulp-imagemin)
- jsHint
- uglify

It's simple to throw in a new task (thanks to [gulp-starter](https://github.com/greypants/gulp-starter))--just place the task under `build/tasks/` and it'll automatically get picked up and available on the command line (can also add it to a combined task like `tasks/default.js`).

## Using

You need [node](http://nodejs.org/download/) or [iojs](https://iojs.org/en/index.html).
```
npm install
gulp
```

### Tasks

By default it assumes dev mode, which spits skips uglify, includes source maps, and doesn't compress. To do the opposite of those things on any given task, pass in `dist` in the command line, like so:
```
gulp --dist
```

- default: `['assets', 'lib', 'sass', 'watch', 'code', 'html']` in dev mode (sourcemaps) or distribution mode (uglify, compress, etc)
- `code`: always lints
- `lib`: concatenates and compresses anything in the js/lib folder (with sourcemaps)
- `sass`
- `lint`
- `html`: preprocesses markup, resolving any if-defs
- `clean`: deletes destination folder
- `assets`: copies `img` into destination and compresses
- `watch`: gulp.watch's HTML and Sass