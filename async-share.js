var EventEmitter = require('eventemitter3')

module.exports = function (promise) {
    var ee = new EventEmitter()
    var ready = true
    return function () {
        var args = arguments
        return new Promise(function (resolve, reject) {
            ee.once('resolve', resolve)
            ee.once('reject', reject)
            if (ready) {
                ready = false
                promise.apply(null, args).then(function (res) {
                    ee.emit('resolve', res)
                    ready = true
                }, function (err) {
                    ee.emit('reject', err)
                    ready = true
                })
            }
        })
    }
}
