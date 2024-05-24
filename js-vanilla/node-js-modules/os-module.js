`THE OS MODULE`;
// The os module is used to get information about the operating system. It is used to get the operating system platform, architecture, CPU, memory, uptime, user info and network interfaces. The os module is a core module and does not need to be installed.

const os = require('os');       // require the os module

`Architecture`;
// The arch() method is used to get the architecture of the operating system. It returns the architecture of the operating system i.e. x64, arm, x86

const architecture = os.arch();      // returns the architecture of the operating system e.g x64, arm, x86


`Platform`;
// The platform() method is used to get the platform of the operating system. It returns the platform of the operating system i.e. win32, linux, darwin (mac)

const platform = os.platform();      // returns the platform of the operating system. i.e. win32, linux, darwin (mac)


`CPU Info`;
// The cpus() method gets the CPU information of the operating system. It returns an array of objects with the model, speed, times and cores properties. The model property is the model of the CPU, the speed property is the speed of the CPU, the times property is the time the CPU has spent in different modes and the cores property is the number of cores the CPU has

const cpuInfo = os.cpus();      // get the CPU information of the operating system


`Free Memory`;
// The freemem() method is used to get the free memory of the operating system. It returns the free memory of the operating system in bytes

const freeMemory = os.freemem();      // get the free memory of the operating system


`Total Memory`;
// The totalmem() method is used to get the total memory of the operating system. It returns the total memory of the operating system in bytes

const totalMemory = os.totalmem();      // get the total memory of the operating system


`Home Directory`;
// The homedir() method is used to get the home directory of the operating system. It returns the home directory of the operating system

const homeDirectory = os.homedir();      // get the home directory of the operating system e.g C:\Users\John on windows and /Users/John on unix


`Hostname`;
// The hostname() method is used to get the hostname of the operating system. It returns the hostname of the operating system i.e. John-PC, John-Mac

const hostName = os.hostname();      // get the hostname of the operating system


`Network Interfaces`;
// The networkInterfaces() method is used to get the network interfaces of the operating system. It returns an object with the network interfaces of the operating system. The object has the interface name as the key and an array of objects with the address, netmask, family, mac, internal and cidr properties as the value

const networkInterfaces = os.networkInterfaces();      // get the network interfaces of the operating system


`Operating System Info`;
// The release() method is used to get the release of the operating system. It returns the release of the operating system i.e. 10.0.19041, 20.4.0

const release = os.release();      // get the release of the operating system


`System Uptime`;
// The uptime() method is used to get the uptime of the operating system in seconds. Uptime is the time the operating system has been running since it was last booted

const uptime = os.uptime();      // get the uptime of the operating system in seconds


`User Info`;
// The userInfo() method is used to get the user info of the operating system. It returns an object with the username, uid, gid, shell, homedir and shell properties

const userInfo = os.userInfo();      // get the user info of the operating system

