// FILESYSTEM MODULE - asynchronous by default,
// but they can also work synchronously by appending Sync
// ex. fs.renameSync()
const fs = require("fs");

// check if the file exists and Node can access it with its permissions
fs.access();
fs.open(); // set the file mode
fs.close(); // close a file descriptor
fs.readdir(); // read the contents of a directory

// read the content of a file.
fs.readFile();
fs.read();

// write data to a file.
fs.write();
fs.writeFile();

// append data to a file. If the file does not exist, it's created
fs.appendFile();

// start watching for changes on a file.
fs.watch();
fs.watchFile();
fs.unwatchFile(); // stop watching for changes on a file

fs.mkdir(); // create a new folder
fs.mkdtemp(); // create a temporary directory
fs.rename(); // rename a file or folder
fs.rmdir(); // remove a folder
fs.copyFile(); // copies a file

// resolve relative file path pointers (., ..) to the full path
fs.realpath();

// returns the status of the file identified by the filename passed.
fs.stat();
fs.fstat();
fs.lstat();

// modify permission
fs.chmod();
fs.lchmod();
fs.fchmod();

// change owner
fs.chown();
fs.fchown();
fs.lchown();

// change the timestamp of the file identified by the filename passed.
fs.utimes();
fs.futimes();

fs.link(); // create a new hard link to a file
fs.symlink(); // create a new symbolic link to a file
fs.readlink(); // read the value of a symbolic link
fs.unlink(); // remove a file or a symbolic link

// truncate to the specified length the file identified by the filename passed.
fs.truncate();
fs.ftruncate();

fs.createReadStream(); // create a readable file stream
fs.createWriteStream(); // create a writable file stream

// PATH MODULE
const path = require("path");

path.basename(); // Return the last portion of a path
path.dirname(); // Return the directory part of a path
path.extname(); // Return the extension part of a path
path.isAbsolute(); // Returns true if it's an absolute path
path.join(); // Joins two or more parts of a path
path.normalize(); // Tries to calculate the actual path
path.parse(); // Parses a path to an object with the segments that compose it
path.relative(); // Return relative path
path.resolve(); // Return absolute path

// OS MODULE
const os = require("os");
os.arch(); // return architecture
os.cpus(); // CPU information
os.endianess(); // big endian or little endian
os.freemem(); // free memory
os.homedir(); // Return the path to the home directory of the current user
os.hostname(); // return hostname
os.loadavg(); // return OS load average
os.networkInterface(); // return network details
os.platform(); // platform compiled
os.release(); // OS release number
os.tmpdir(); // temp dir path
os.totalmem(); // total memory available
os.type(); // OS type
os.uptime(); // return OS uptime
os.userInfo(); // info of the current user

// EVENTS MODULE
const Event = require('events');
const emitter = new Event();

// Adds a callback function that's called when an event is emitted.
emitter.addListener()
emitter.on() // alias for emitter.addListener()

emitter.emit() // emit an event
emitter.eventNames() // events registered

// Get the max listeners one can add to an EventListener object
emitter.getMaxListeners()

// Get the count of listeners of the event passed as parameter
emitter.listenerCount()

// Gets an array of listeners of the event passed as parameter
emitter.listeners()

emitter.off() // alias for emitter.removeListener()
emitter.once() // emit an event once
emitter.prependListener() // prepend an event
emitter.prependOnceListener() // perpend an event once
emitter.removeAllListeners() // remove all listeners
emitter.removeListener() // remove a specific listener
// Sets the max listeners one can add to an EventListener object
emitter.setMaxListeners()
