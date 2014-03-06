var initializer = require('./initializer');
var path        = require('path');


var init = initializer(path.join(__dirname, 'initializers'));

init.on('add', function added (fn) {
    console.log('added "%s" to stack with priority "%s"', fn.name || 'task', fn.priority || 0);
})

init.on('complete', function complete () {
    console.log('finished loading initializers');
});

init.on('error', function error (err) {
    console.error('error:', err);
});

init.add(function first (next) {
    console.log('starting misc init');
    setTimeout(function () {
        next();
    }, 1000);
}, 100);

init.add(function second () {
    console.log('non async handler loading');
}, 2).add(function third () {
    console.log('another non async loading');
});

init.start();