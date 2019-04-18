var readline = require('readline');
// imported code node package ReadLine so that we can get the node command prompt within the terminal. This way. we can execute the node commands in the terminal itself.

// Imported when using Node OS Core Modules.
const os = require('os');


var events = require('events');
var e = new events.EventEmitter();

// Function to convert bytes
function bytesToSize(bytes) {
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes == 0) return '0 Byte';
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};

// Listeners

e.on('exit', (val) => {
  // console.log(val, 'coming from Listener');
  process.exit(0);
})

e.on('date', (val) => {
  // console.log(val, 'coming from date');
  console.log(new Date(Date.now()).toLocaleDateString());
})

e.on('stats', (val) => {
  console.log('Your CPU model is:', os.cpus()[0].model);
  console.log("You've", bytesToSize(os.freemem()), "of free memory on this system");
  console.log("System Hostname:", os.hostname());
  console.log('OS Platform:', os.platform());
  console.log("OS Type:", os.type());
  console.log('System up since',os.uptime()/3600, 'hours');
})

e.on('man', (val) => {
  ManHelp('man');
})

e.on('help', (val) => {
  ManHelp('help');
})

// Function for combining both Man and Help Listener operations
function ManHelp(str) {
  console.log('running for man and help both');
  console.log(
    "This program takes following commands: \n\
    Man:        Shows the detailed description of each command \n\
    Help:       Shows the list of all the available commands \n\
    Date:       Shows current date in YYYY-M-DD format\n\
    Stats:      Shows the system statistics \n\
    list users: Shows the list of all the users \n\
    user info:  Shows the information of each user"
  );
}


var cli = {};

cli.processInput = (val) => {
  const uniqueInputs = ['exit', 'man', 'date', 'stats', 'help' ,'list users', 'user info'];
  let matchFound = false;
  // console.log(val);
  uniqueInputs.some(elm => {
    if(val.toLowerCase().indexOf(elm) > -1) {
      // console.log('match found =>', elm);
      matchFound = true;
      e.emit(elm, val)
    }
  })
  if(!matchFound) {
    console.log('match not found');
  }
}

cli.init = () => {
  console.log('CLI is running');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'kvsn>'
  })
  rl.prompt();

  rl.on('line', (input) => {
    cli.processInput(input);
  })
};

  
module.exports = cli;

// if (str === 'exit') {
//   // e.emit('input', str);
//   console.log('this is exit signal');
// return;
// }
// console.log('Invalid Input');