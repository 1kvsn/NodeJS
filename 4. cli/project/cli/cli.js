var readline = require('readline');
// imported code node package ReadLine so that we can get the node command prompt within the terminal. This way. we can execute the node commands in the terminal itself.

// Imported when using Node OS Core Modules.
const os = require('os');
const fs = require('fs');

const path = require('path');
var events = require('events');

var userPath = path.join(__dirname , '../../../', 'nodetesting/user');
var e = new events.EventEmitter();

var helpManObj = {
  'Man': 'Shows the detailed description of each command',
  'Help': 'Shows the list of all the available commands',
  'Date': 'Shows current date in YYYY-M-DD format',
  'Exit': 'Exits the prompt',
  'Stats': 'Shows the system statistics ',
  'list users': 'Shows the list of all the users',
}

var statsObj = {
  "CPU": padEight(os.cpus()[0].model),
  "Free Memory": padEight(bytesToSize(os.freemem())),
  "System Hostname": padEight(os.hostname()),
  "OS Type": os.type(),
  "OS Architecture": os.arch(),
  "System Uptime": os.uptime().toFixed(2)/3600,

}



// Function to convert bytes
function bytesToSize(bytes) {
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes == 0) return '0 Byte';
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};

// Listeners

e.on('exit', (val) => {
  console.log('Exiting the prompt');
  process.exit(0);
})

e.on('date', (val) => {
  console.log();
  newLine();
  console.log();
  console.log(center("Today's date is"), new Date(Date.now()).toLocaleDateString());
  console.log();
  newLine();
  console.log();
})

e.on('stats', (val) => {
  newLine();
  console.log(center("---|    System Specs    |---"));
  newLine();
  vertSpace(1);
  for(key in statsObj) {
    vertSpace(1);
    console.log(blankSpace(70), key, ':',blankSpace(20), `${statsObj[key]}`);
  }
  newLine();
})

e.on('man', (val) => {
  manHelp('man');
})

e.on('help', (val) => {
  manHelp('help');
})

// Function for combining both Man and Help Listener operations
function manHelp(str) {
  newLine();
  console.log(center('---|    Following commands are available    |---'));
  newLine();
  for (key in helpManObj) {
    vertSpace(1);
    console.log(blankSpace(70), key, ':',blankSpace(20), `${helpManObj[key]}`);
    vertSpace(1)
  }
  newLine();
}


// Enters new line
var width = process.stdout.columns;
// console.log(width);
function newLine() {
  var line = '';
  for( let i=0; i<=width - 1; i++ ) {
    line += '-';
  }
  console.log(line);
}

// Centers stuff
function center(str) {
  var space = '';
  var a = (width - str.length)/2;
  var leftPadding = parseFloat(a);
  for(let i=0; i <= leftPadding; i++) {
    space += ' ';
  }
  return space+str;
}

function blankSpace(n) {
  var space = '';
  for(let i=0; i<=n; i++ ) {
    space += ' ';
  }
  return space;
}

function vertSpace(n) {
  for(let i=0; i<=n; i++) {
    console.log();
  }
}

function padFour(str) {
  var space = '';
  var a = (width - str.length)/4;
  for(let i=0; i < a; i++) {
    space += ' ';
  }
  return space+str;
}

function padEight(str) {
  var space = '';
  var a = (width - str.length)/8;
  for(let i=0; i < a; i++) {
    space += ' ';
  }
  return space+str;
}


// ReadFile listener and read files from a directory to print its contents
e.on('list users', (val) => {
  fs.readdir(userPath, (err, fd) => {
    if(err) console.error(err);
    var count = fd.length;
    console.log(count);
    newLine();
    console.log(blankSpace(70), "Reading files from directory:", userPath);
    newLine();
    fd.forEach((elm, i) => {
      fs.readFile(userPath + `/${elm}`, (err, result) => {
        if(err) console.error('Unable to read files');
        vertSpace(1);
        newLine();
        console.log(blankSpace(90), 'fileName :', elm);
        vertSpace(1);
        console.log(blankSpace(40), result.toString());
        newLine();
      })
    })
  })
})


var cli = {};

cli.processInput = (val) => {
  const uniqueInputs = ['exit', 'man', 'date', 'stats', 'help' ,'list users'];
  let matchFound = false;
  uniqueInputs.some(elm => {
    if(val.toLowerCase().indexOf(elm) > -1) {
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
    prompt: 'kvsn$'
  })
  rl.prompt();

  rl.on('line', (input) => {
    cli.processInput(input);
  })
  rl.prompt();
 
};

module.exports = cli;

