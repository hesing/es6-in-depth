## Babel with Npm Scripts

```
npm i babel-cli -D
npm i  babel-preset-es2015  babel-preset-stage-0 -D
```
```javascript
{
    "scripts": {
        "build:js": "babel public/src --out-dir public/build -w"
    }
}

// npm run build:js
```

## Babel with gulp
```
npm i gulp gulp-babel -D
```

```javascript
//gulpfile.js
var gulp =require("gulp");
var babel =require("gulp-babel");

gulp.task("default", function(){
    return gulp.src("public/src/**/*.js")
            .pipe(babel())
            .dest("public/build");
});
```

## Babel with webpack

```
npm i webpack -D
npm install babel-loader babel-core babel-preset-es2015 babel-preset-stage-0 -D
```

```javascript
module.exports = {
    entry: './public/src/main.js',
    output: {
        path: 'public/webpackbuild',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'stage-0']
            }
        }]
    }
}
```

## Babel with browserify

```
npm i browserify -g
npm i browserify -D
npm i babelify -D

browserify --entry public/src/main.js --outfile public/build/browserifybundle.js

// using with babel '-t' (transfarmer)
browserify --entry public/src/main.js --outfile public/build/browserifybundle.js -t babelify
```