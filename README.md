# ts_01
TypeScript exercise

## 1. Setup
```bash
$ npm init

echo "# ts_01" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:rwibawa/ts_01.git
git push -u origin master
```

## 2. TypeScript intro
[typescript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

```bash
$ mkdir ts_in_5min
$ cd ts_in_5min

$ vi greeter.ts
$ tsc greeter.ts
$ cat greeter.js

$ vi greeter.html
SFO1502662077M:ts_in_5min 502662077$ http-server -p 8097
```
Open it at [http://localhost:8097/greeter.html](http://localhost:8097/greeter.html)

## 3. Gulp
[Gulp tutorial](https://www.typescriptlang.org/docs/handbook/gulp.html)

### gulp-typescript
```bash
  $ mkdir src
  $ mkdir dist

  $ npm install -g gulp-cli
  $ npm install --save-dev typescript gulp gulp-typescript

  $ cd src
  $ vi main.ts
  $ cd ..

  $ vi tsconfig.json
  $ vi gulpfile.js
  $ gulp

  $ nvm list
  $ nvm use v7.7.2

  $ ls -lah dist/
  $ node dist/main.js

  $ npm install --save-dev browserify tsify vinyl-source-stream
```

### Browserify
```bash
  $ npm install --save-dev browserify tsify vinyl-source-stream
  $ vi src/index.html
  $ vi src/main3.ts

  $ cp gulpfile.js gulpfile1.js
  $ vi gulpfile.js
  $ gulp

  $ cat src/main3.ts
  $ cd dist
  $ http-server -p 8097
```

### Watchify, Babel, and Uglify
```bash
  $ npm install --save-dev watchify gulp-util
  $ npm install --save-dev gulp-uglify vinyl-buffer gulp-sourcemaps
  $ npm install --save-dev babelify babel-preset-es2015 vinyl-buffer gulp-sourcemaps

  $ vi tsconfig.json
  $ vi gulpfile.js
  $ gulp
```
