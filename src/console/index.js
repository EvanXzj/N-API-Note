/**
 * Node console Module Learning Note
 * Link: https://nodejs.org/docs/latest-v10.x/api/console.html#console_console
 */

// const { Console } = require('console')
const { Console } = console

const {join} = require('path')
const {createWriteStream} = require('fs')

const output = createWriteStream(join(__dirname, 'out.log'), {flags: 'a+'})
const errorOutput = createWriteStream(join(__dirname, 'error.log'), {flags: 'a+'})

// 全局的console是 new Console({stdout: process.stdoutm stderr: process.stderr})
const logger = new Console(output, errorOutput, false)

logger.log('Hello Node')
logger.error(new Error('unexpect error'))

// console.assert(value[, ...message]), 当value不为真值时， 会在标准输出答应错误信息，不会中断程序的执行。
console.assert(0, 'number negetive')
console.assert('OK', 'no message will be print')
console.assert(false, 'message A', 'message B')

// console.clear() 在TTY中同clear shell命令
console.clear()

// console.count(label = 'default') 和 console.countReset(lable = 'defalut')
console.count() // prints default: 1
console.count('default') // prints default: 2
console.countReset()
console.count() // prints default: 1

console.count('counter') // prints counter: 1
console.count('counter') // prints counter: 2
console.countReset('counter')
console.count('counter') // prints counter: 1

// debug, info, dirxml 后台调用的都是console.log
console.log('message')
console.info('message')
console.debug('message')
console.dirxml('message')

// console.dir(obj[, options])
const obj = {a: 1, b: 2, c: {d: 3}, e: {f: {g: {k: 4}}}}
Object.defineProperty(obj, 'l', {
   value: 5,
   writable: false,
   enumerable: false,
   configurable: false
})
console.log(obj)
console.dir(obj)
console.dir(obj, {depth: 3,colors: true, showHidden: true})

// console.error() 是 console.warn()的别名
const code = 5;
console.error('error #%d', code)
console.error('error', code)
console.warn('warn #%d', code)
console.warn('warn', code)

// console.group(...data), 别名console.groupCollapsed(...data)
console.group(1,2,3,4)
// console.groupCollapsed(1,2,3,4)
console.log('李')
console.log('码')
console.groupEnd()
console.log('徐')
console.groupCollapsed(1,2,3,4)
console.groupCollapsed(1,2,3,4)
console.log('chui')
console.log('dylan')
console.groupCollapsed(1,2,3,4)
console.log('王')
console.groupEnd()
console.log('狗')
console.groupEnd()
console.log('子')
console.groupEnd()
console.log('你')
console.log('变')
console.log('了')

// console.time(label = 'default')、console.timeEnd(label = 'default'), timeLog
console.time('100-elements')
for (let i = 0; i < 100; i++) {}
console.timeEnd('100-elements')

function expensiveProcess() {
    for (let i = 0; i < 1000; i++) {}
    return 'VALUE'
}

console.time('process')
const value = expensiveProcess()
console.timeLog('process', value)
// Prints "process: 0.221ms VALUE".
console.timeEnd('process')

// console.trace()
console.trace('WTF', 'TMY', 'OMG')
