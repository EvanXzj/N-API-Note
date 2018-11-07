/**
 * Node Path Module Learning Note
 * Link: https://nodejs.org/docs/latest-v10.x/api/path.html#path_path
 */

const path = require('path')

// path.win32[porperity], 可以在任何平台上处理Windows文件路径
console.log(path.win32)
console.log(path.win32.basename('C:\\temp\\test.md'))

// path.posix[porperity], 可以在任何平台上处理POSIX类型文件路径
console.log(path.posix)
console.log(path.posix.basename('/tmp/test.md'))

// path.basename(path[, ext]), 返回path路径中的最后一部分，走后面的分割符（path.sep）会被忽略
console.log(path.basename('/tmp/templates/test.md'))
console.log(path.basename('/tmp/templates/test.md/'))
console.log(path.basename('/tmp/templates/test.md', '.md'))
console.log(path.basename('/tmp/templates/test.md/', '.md'))
console.log(path.basename('/tmp/templates/test.md', '.mdx'))

// path.delimiter 返回平台相关的路径分隔符
console.log(path.delimiter)
console.log(path.win32.delimiter)
console.log(process.env.PATH)
console.log(process.env.PATH.split(path.delimiter))

// path.dirname(path) 返回路径中代表文件夹的部分，同 Unix 的dirname 命令类似, 最后的path.sep符号会被忽略
console.log(path.dirname('/foo/bar/baz/test'))
console.log(path.dirname('/foo/bar/baz/test/'))
console.log(path.win32.dirname('c:\\foo\\bar\\baz\\test'))
console.log(path.win32.dirname('c:\\foo\\bar\\baz\\test\\'))

// path.extname(path) 返回路径中文件的后缀名，即路径中最后一个'.'之后的部分。
// 如果一个路径中并不包含'.'或该路径只包含一个'.' 且这个'.'为路径的第一个字符，则此命令返回空字符串。
console.log(path.extname('index.html'))
console.log(path.extname('index.html.md'))
console.log(path.extname('index.'))
console.log(path.extname('index')) // ''
console.log(path.extname('.index')) // ''

// path.format(pathObject), 它和path.parse()相反
// pathObj => {
//   dir
//   root
//   base
//   name
//   ext
// }
// pathObject.root is ignored if pathObject.dir is provided
// pathObject.ext and pathObject.name are ignored if pathObject.base exists
console.log(path.format({
    root: '/ignored',
    dir: '/home/worker/tmp',
    base: 'test.md'
}))

console.log(path.format({
    root: '/home/worker/tmp/',
    base: 'file.txt',
    ext: 'ignored'
}))
// 注意这个的输出
console.log(path.format({
    root: '/home/worker/tmp',
    base: 'file.txt',
    ext: 'ignored'
}))

console.log(path.format({
    root: '/home/worker/tmp/',
    name: 'file',
    ext: '.txt'
}))

// path.isAbsolute(path), 判断路径是否为绝对路径
console.log(path.isAbsolute('/tmp'))
console.log(path.isAbsolute('/baz/..'))
console.log(path.isAbsolute('src/path'))
console.log(path.isAbsolute('.'))
console.log(path.win32.isAbsolute('\\bar\\baz'))
console.log(path.win32.isAbsolute('bar\\baz'))

// path.join([...paths]) 用于连接路径。该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"。
console.log(path.join())
console.log(path.join('/foo', 'bar', 'baz/', 'test', '..'))
console.log(path.win32.join('/foo', 'bar', 'baz/', 'test', '.'))
// path.join('foo', {}, 'bar') // throws 'TypeError: Path must be a string. Received {}'

// path.normalize(path) 规范化路径，注意'..' 和 '.'
console.log(path.normalize('/foo/bar//baz/asdf/quux/..'))
console.log(path.normalize('/foo/bar//baz/asdf/quux/.'))
console.log(path.normalize('/foo/bar//baz/asdf/quux'))
console.log(path.win32.normalize('C:\\temp\\\\foo\\bar\\..\\'))

// path.parse(path)  返回路径字符串的对象。
console.log(path.parse('/home/user/dir/file.txt'))
console.log(path.win32.parse('C:\\path\\dir\\file.txt'))

// path.relative(from, to) 用于将绝对路径转为相对路径，返回从 from 到 to 的相对路径（基于当前工作目录）。
console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'))

// path.resolve([from ...], to)
// 将 to 参数解析为绝对路径，给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径。 
// 例如路径片段的序列为：/foo、/bar、baz，则调用 path.resolve('/foo', '/bar', 'baz') 会返回 /bar/baz。
// 1. 如果给定的所有路径都不能组成一个绝对路径，则当前路径会被使用
// 2. 长度为零的路径份被忽略
console.log(path.resolve('/foo', '/bar', 'baz'))
console.log(path.resolve('/foo/bar', './baz'))
console.log(path.resolve('foo/bar', './baz'))

// path.sep  返回平台相关的路径片段分割符
// On Windows, both the forward slash (/) and backward slash (\) are accepted as path segment separators; 
// however, the path methods only add backward slashes (\).
console.log(path.sep)
console.log(path.win32.sep)

// path.toNamespacedPath(path), On Windows systems only. 不知道是干嘛的