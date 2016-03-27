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

## Want to use es6 module  (import/export)

```
npm i browserify -D
npm i babelify -D
npm start ( run browserify, generate sourcemap)
```