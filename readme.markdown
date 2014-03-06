# Initializer #
___

Helps to initialize your project, optionally specifiying priority and a folder to load scripts from. I was inspired by the idea from [Jared Hanson's Bootable](https://github.com/jaredhanson/bootable) project.

### Examples ###
___
```js
var initializer = require('initializer');

var init = initializer();

init.add(function first (next) {
    console.log('starting misc init');
    setTimeout(function () {
        next();
    }, 1000);
});

init.start();

```

### TODO ###
___
- create tests with mocha
- detailed documentation
- added before/after events when running each initializer
