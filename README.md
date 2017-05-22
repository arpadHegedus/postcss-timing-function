A [PostCSS] plugin to add other common named timing functions without having to remember bezier values.

[PostCSS]: https://github.com/postcss/postcss
[Gulp]: https://github.com/gulpjs/gulp

## Installation

```js
npm install postcss-timing-function
```

## Example

```css
body {
    transition: all .3s ease-in-out-quart
}
```

will produce

```css
body {
    transition: all .3s cubic-bezier(.77, 0, .17, 1)
}
```

## Usage

Using [Gulp].

```js
var gulp        = require('gulp'),
    postcss     = require('gulp-postcss'),
    googleColor = require('postcss-google-color');

gulp.task('css', function() {
    gulp.src('path/to/dev-css').
        .pipe(postcss({
            googleColor
        }))
        .pipe(gulp.dest('path/to/build/css'));
});

// rest of the gulp file
```

## Transitions

The supported named transitions are:

* ease-in-quad
* ease-in-cubic
* ease-in-quart
* ease-in-quint
* ease-in-sine
* ease-in-expo
* ease-in-circ
* ease-out-quad
* ease-out-cubic
* ease-out-quart
* ease-out-quint
* ease-out-sine
* ease-out-expo
* ease-out-circ
* ease-out-back
* ease-in-out-quad
* ease-in-out-cubic
* ease-in-out-quart
* ease-in-out-quint
* ease-in-out-sine
* ease-in-out-expo
* ease-in-out-circ
* ease-in-out-back
* swift-out
* bounce
