var asyncShare = require('./async-share')

var oldMethod = function (a) {
  return new Promise(function (resolve) {
    console.log('test: ' + a)
    setTimeout(function () {
      console.log('test')
      resolve(1)
    }, 1000)
  })
}

var newMethod = asyncShare(oldMethod)

newMethod(11).then(console.log)
newMethod(22).then(console.log)
newMethod(33).then(console.log)

