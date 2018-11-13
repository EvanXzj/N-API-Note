/**
 * Node URL Module Learning Note
 * Link: https://nodejs.org/docs/latest-v10.x/api/url.html#url_url
 */

const url = require('url')

/*
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│                                            href                                             │
├──────────┬──┬─────────────────────┬─────────────────────┬───────────────────────────┬───────┤
│ protocol │  │        auth         │        host         │           path            │ hash  │
│          │  │                     ├──────────────┬──────┼──────────┬────────────────┤       │
│          │  │                     │   hostname   │ port │ pathname │     search     │       │
│          │  │                     │              │      │          ├─┬──────────────┤       │
│          │  │                     │              │      │          │ │    query     │       │
"  https:   //    user   :   pass   @ sub.host.com : 8080   /p/a/t/h  ?  query=string   #hash "
│          │  │          │          │   hostname   │ port │          │                │       │
│          │  │          │          ├──────────────┴──────┤          │                │       │
│ protocol │  │ username │ password │        host         │          │                │       │
├──────────┴──┼──────────┴──────────┼─────────────────────┤          │                │       │
│   origin    │                     │       origin        │ pathname │     search     │ hash  │
├─────────────┴─────────────────────┴─────────────────────┴──────────┴────────────────┴───────┤
│                                            href                                             │
└─────────────────────────────────────────────────────────────────────────────────────────────
 */


 /**
  * Class: URL
  */
let myURL =
//   new url.URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash')
new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash')

delete myURL.protocol
console.log(myURL)
const myURL2 = url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash')
console.log(myURL2)
delete myURL2.protocol
console.log(myURL2)

// url.hash
myURL = new URL('https://example.org:81/foo#bar')
console.log(myURL.hash)

myURL.hash = 'baz'
console.log(myURL.href)

// url.host 包括端口号
console.log(myURL.host)
myURL.host = 'example.org:82'
console.log(myURL.href)

// url.hostname 不包括端口号
console.log(myURL.hostname)
myURL.hostname = 'example2.org:83'
console.log(myURL.href)

// url.href
console.log(myURL.href)
myURL.href = 'http://user:pass@example.org:81/foo?abc=xzj#bar'
console.log(myURL.href)
console.log(myURL.toString())

// url.origin(只读) => url.protocol + url.host
console.log(myURL.origin)

// url.username
console.log(myURL.username)
myURL.username = 'username'
console.log(myURL.href)

// url.password
console.log(myURL.password)
myURL.password = 'xyz'
console.log(myURL.password)
console.log(myURL.href)

// url.pathname
console.log(myURL.pathname)
myURL.pathname = '/foo/baz'
console.log(myURL.href)

// url.port
console.log(myURL.port)
// Default ports are automatically transformed to the empty string
// (HTTPS protocol's default port is 443)
myURL.port = '443';
console.log(myURL.port);
// Prints the empty string
console.log(myURL.href);
// Prints https://example.org/
myURL.port = 1234;
console.log(myURL.port);
// Prints 1234
console.log(myURL.href);

// Completely invalid port strings are ignored
myURL.port = 'abcd';
console.log(myURL.port);
// Prints 1234

// Leading numbers are treated as a port number
myURL.port = '5678abcd';
console.log(myURL.port);

// Non-integers are truncated
myURL.port = 1234.5678;
console.log(myURL.port);

// Out-of-range numbers which are not represented in scientific notation
// will be ignored.
myURL.port = 1e10; // 10000000000, will be range-checked as described below
console.log(myURL.port);

myURL.port = 4.567e21;
console.log(myURL.port);
console.log(myURL.href)

// url.protocol : 注意特殊用例
console.log(myURL.protocol)
myURL.protocol = 'https'
console.log(myURL.href)

// url.search
console.log(myURL.search)
myURL.search = 'abc=123'
console.log(myURL.search)

// url.searchParams(只读)  => Map
console.log(myURL.searchParams)
console.log(myURL.searchParams.get('abc'))

// url.toJSON()  JSON.stringify(URL) 会自动调用该方法
const myURLs = [
  new URL('https://www.example.com'),
  new URL('https://test.example.org')
];
console.log(JSON.stringify(myURLs));


/**
 * Class: URLSearchParams, 全局可用
 */
myURL = new URL('https://example.org/?abc=123');
console.log(myURL.searchParams.get('abc'))

myURL.searchParams.append('abc', 'xyz')
console.log(myURL.href)

// entries 返回一个遍历器对象, Alias for urlSearchParams[@@iterator]().
console.log(myURL.searchParams.entries())

myURL.searchParams.delete('abc')
myURL.searchParams.set('a', 'b')
console.log(myURL.href)

const newSearchParams = new URLSearchParams(myURL.searchParams);
// The above is equivalent to
// const newSearchParams = new URLSearchParams(myURL.search);

newSearchParams.append('a', 'c');
console.log(myURL.href);
// Prints https://example.org/?a=b
console.log(newSearchParams.toString());
// Prints a=b&a=c

// newSearchParams.toString() is implicitly called
myURL.search = newSearchParams;
console.log(myURL.href);
// Prints https://example.org/?a=b&a=c
newSearchParams.delete('a');
console.log(myURL.href);
// Prints https://example.org/?a=b&a=c

let params;

params = new URLSearchParams('user=abc&query=xyz');
console.log(params.get('user'));
// Prints 'abc'
console.log(params.toString());
// Prints 'user=abc&query=xyz'

params = new URLSearchParams('?user=abc&query=xyz');
console.log(params.toString());
// Prints 'user=abc&query=xyz'

myURL.searchParams.forEach((value, name, searchParams) => {
  console.log(name, value, myURL.searchParams === searchParams);
});

// urlSearchParams.keys() Returns an ES6 Iterator over the names of each name-value pair.
params = new URLSearchParams('foo=bar&foo=baz');
for (const name of params.keys()) {
  console.log(name);
}

// new URLSearchParams()
// new URLSearchParams(string)
// new URLSearchParams(obj)
// new URLSearchParams(iterable)

/**
 * Legacy URL API
 */

// 如上图
console.log(url.format({
  protocol: 'https',
  hostname: 'example.com',
  pathname: '/some/path',
  query: {
    page: 1,
    format: 'json'
  }
}))
console.log(url.parse('https://user:pass@example.org:8000/pa/th?query=q#hash'))
console.log(url.parse('https://user:pass@example.org:8000/pa/th?query=q#hash', {parseQueryString: true, slashesDenoteHost: true}))

// url.resolve(from, to)
console.log(url.resolve('/one/two/three', 'four'))
console.log(url.resolve('http://example.com/', '/one'))
console.log(url.resolve('http://example.com/one', '/two'))

 /**
  * Percent-Encoding in URLs
  */
