module.exports = function server (done) {
    console.log('starting server initializer');
    setTimeout(done, 3500);
};

module.exports.priority = 0;