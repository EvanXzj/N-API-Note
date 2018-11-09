/**
 * Node Query String Module Learning Note
 * Link: https://nodejs.org/docs/latest-v10.x/api/util.html#util_util
 */
const util = require('util')

// callbackify 函数callback化
async function fn1() {
    return 'hello world';
}
const callbackFunction1 = util.callbackify(fn1)

callbackFunction1((err, ret) => {
    if (err) {
        console.error('error: ', err)
    }

    console.log(ret)
})

function fn2() {
    return Promise.reject(null)
}
const callbackFunction2 = util.callbackify(fn2)

callbackFunction2((err, ret) => {
    // console.log(err, err.reason, ret)
    console.log(err && err.hasOwnProperty('reason') && err.reason === null)
})

// debuglog(section) 根据section字符串来创建一个logger, 如何NODE_DEBUG 环境变量和section的值相同， 就会打印相应的日志
// 类似debug库
const fooLogger = util.debuglog('foo')
const barLogger = util.debuglog('foo-bar')
fooLogger('hello from foo [%d]', 1234)
barLogger('I am bar log')

// deprecate
const print = (msg) => console.log(msg);
const deprecatePrint = util.deprecate(print, 'The print function was deprecated. Use console.info instead.')
deprecatePrint('wtf')
deprecatePrint('omg')


/**
 * util.format(format[, args])
 * 
 * %s -> string; %d -> Number or BigInt; %i Integer or BigInt
 * %f -> Floating point value; %j -> JSON; %% -> %
 * %o -> Object;  %O -> Object without non-enumerable porp; 
 */

console.log(util.format('%s:%s', 'foo'))
console.log(util.format('%s:%s', 'foo', 'bar', 'baz', {a: 1}, Symbol('test')))
console.log(util.format(1, 2, 3))
console.log(util.format('%% %s'))

// util.formatWithOptions, 同上差不多，只是增加了inspectOptions
console.log(util.formatWithOptions({ colors: true }, 'See object %O', { foo: 42 }))

// inspect, promisify, isDeepStrictEqual, util.inspect.defaultOptions, util.inspect.custom, util.promisify.custom