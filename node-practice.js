// https://www.npmjs.com/package/readline-sync

// var readlineSync = require("readline-sync")

// Wait for user's response

// var userName = readlineSync.question("May I have your name?")
// console.log("Hi" + userName + "!")

// Handle the secret text (e.g. password)

// var favFood = readlineSync.question("What is your favorite food", {
//     hideEchoBack: true
// })
// console.log("Oh," + userName + "loves" + favFood + "!")

// var readlineSync = require('readline-sync');

// if (readlineSync.keyInYN('Do you want this module?')) {
//   // 'Y' key was pressed.
//   console.log('Installing now...');
// //   Do something...
// } else {
//   // Another key was pressed.
//   console.log('Searching another...');
//   // Do something...
// }

// var readlineSync = require('readline-sync'),
//   animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],
//   index = readlineSync.keyInSelect(animals, 'Which animal?');
// console.log('Ok, ' + animals[index] + ' goes to your room.');

// var readlineSync = require('readline-sync'),
//   MAX = 60, MIN = 0, value = 30, key;
// console.log('\n\n' + (new Array(20)).join(' ') +
//   '[Z] <- -> [X]  FIX: [SPACE]\n');
// while (true) {
//   console.log('\x1B[1A\x1B[K|' +
//     (new Array(value + 1)).join('-') + 'O' +
//     (new Array(MAX - value + 1)).join('-') + '| ' + value);
//   key = readlineSync.keyIn('',
//     {hideEchoBack: true, mask: '', limit: 'zx '});
//   if (key === 'z') { if (value > MIN) { value--; } }
//   else if (key === 'x') { if (value < MAX) { value++; } }
//   else { break; }
// }
// console.log('\nA value the user requested: ' + value);

// var readlineSync = require('readline-sync')
// readlineSync.promptCLLoop({
//     add: function(target, into) {
//       console.log(target + ' is added into ' + into + '.');
//       // Do something...
//     },
//     remove: function(target) {
//       console.log(target + ' is removed.');
//       // Do something...
//     },
//     bye: function() { return true; }
//   });
//   console.log('Exited');

