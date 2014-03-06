module.exports = function routes (done) {
    console.log('starting routes initializer');
    setTimeout(done, 1000);
};

module.exports.priority = 100