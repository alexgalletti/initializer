var initializer = require('..');
var path        = require('path');

// create a new instance
var init = initializer(path.join(__dirname, 'initializers'));

init.on('add', function added (fn) {
    console.log('added "%s" to stack with priority "%s"', fn.name || 'task', fn.priority || 0);
})

init.on('complete', function complete () {
    console.log('all initializers completed!');
});

init.on('error', function error (err) {
    console.error('error:', err);
});

// adding first (async) initializer onto the stack
init.add(function first (next) {
    console.log('starting first init');
    setTimeout(function () {
        next();
    }, 1000);
});

// chaining and adding sychronous handlers
init.add(function second () {
    console.log('second (sync) handler loading');
}, 50).add(function third () {
    console.log('another (sync) handler loading');
});

// start up the initializers
init.start();