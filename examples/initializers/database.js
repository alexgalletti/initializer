module.exports = function database (done) {
    console.log('starting database initializer');
    setTimeout(done, 1000);
};

module.exports.priority = 20;