#! /usr/bin/env node
const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});
console.clear();
const answerCallback = (answer) => {
  if(answer === "Yes" || answer === "yes") {
    console.log("I knew it");
    rl.close();
  } else if (answer === "No" || answer === "no") {
    console.log("Wrong answer! Think more about it...");
    rl.question("Do you love me (Yes, No)? ",     
    answerCallback);
  } else {
    console.log("Wrong answer!");
    rl.question("Do you love me (Yes, No)? ",     
    answerCallback);
  }
}
rl.question("Do you love me (Yes, No)? ", answerCallback);