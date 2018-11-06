/**
 * Node Query String Module Learning Note
 */
const querystring = require('querystring')

// 1. querystring.escape(str), 一般不直接使用，暴露的主要原因是可以让用户自定义编码方法。 它是querystring.stringify默认编码方法

// 2. querystring.parse(qsStr[, sep[, eq[, options]]]), 别名decode
console.log(querystring.parse('q=what&names=chui&names=dylan'))
console.log(querystring.parse('q=what;names=chui;names=dylan', ';'))
console.log(querystring.parse('q-what;names-chui;names-dylan', ';', '-'))

// 3. querystring.stringify(obj[, sep[, eq[, options]]]), 别名encode
console.log(querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' }))
console.log(querystring.stringify({ foo: 'bar', baz: 'qux' }, ';', ':'))

// 4. 同 1. 它是querystring.parse的默认解码方法