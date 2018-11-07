/**
 * Node os Module Learning Note
 * Link: https://nodejs.org/docs/latest-v10.x/api/os.html
 */
const os = require('os')

// os.EOL =>  \n on POSIX ;  \r\n on Windows
console.log(JSON.stringify(os.EOL))

// os.arch() 返回系统cpu架构类型。 该方法底层调用的是process.arch
// 可能值：'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', 'x32', and 'x64'.
console.log(os.arch(), process.arch)

// os.constants 主要包括错误代码、进程信号、libuv常量, 优先级等信息
// 所有常量参考:  https://nodejs.org/dist/latest-v10.x/docs/api/os.html#os_os_constants_1
console.log(os.constants)

// os.cpus(), 返回的是一个数组对象， [{...}, {...}, ...]
console.log(os.cpus())
// Output: 
// [
//     {
//       model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
//       speed: 2926,
//       times: {
//         user: 252020,
//         nice: 0,
//         sys: 30340,
//         idle: 1070356870,
//         irq: 0
//       }
//     },
//     ...
// ]

// os.endianness(), 可能值： ‘BE’, ‘LE’ => 'big endian', 'little endian'; 字节序
console.log(os.endianness())

// os.freemem(), 返回系统可用的内存数量，单位是字节
console.log(os.freemem())

// getPriority([pid = 0]), pid为空或者为零，返回的是当前进程的优先级
console.log(os.getPriority())

// os.homedir(), 返回当前用户所以在的目录
console.log(os.homedir())

// os.hostname(),返回当前系统的主机名
console.log(os.hostname())

// os.loadavg(), 返回系统1，5，15的平均负载， 一般小于系统的cpu数量
console.log(os.loadavg())

// os.networkInterfaces() 获得网络接口列表。
console.log(os.networkInterfaces())

// os.platfom(), 返回操作系统名称。 底层调用的是process.platfom, 同uname -s
console.log(os.platform(), process.platform)

// os.release() 返回版本信息, 同uname -r
console.log(os.release())

// os.tmpdir(), 返回系统默认的tmp目录路径
console.log(os.tmpdir())

// os.totalmem() 返回系统所有的内存数量，单位字节
console.log(os.totalmem())

// os.type(), 怎么感觉和os.platform()是一样的？
console.log(os.type())

// os.uptime() 返回系统运行时间， 单位秒。 怎么和我用htop看到不一样呢？
console.log(os.uptime())

// os.userInfo([options]) 获取当前系统有效用户的信息
console.log(os.userInfo())
console.log(os.userInfo({encoding: 'buffer'}))