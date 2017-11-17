# async-share

[![License MIT](https://img.shields.io/npm/l/async-share.svg)](https://github.com/zhuweiyou/async-share/blob/master/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/async-share.svg)](https://www.npmjs.com/package/async-share)
[![NPM Download](https://img.shields.io/npm/dt/async-share.svg)](https://www.npmjs.com/package/async-share)

Call asynchronous methods at the same time, execute only once, and share the result

```js
var asyncShare = require('async-share')

var oldMethod = function (a) {
    // return a Promise instance
}
var newMethod = asyncShare(oldMethod)
newMethod(1)
newMethod(2)
```
