#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.grey.bold(`---------${chalk.magentaBright.bold("Automated teller machine (ATM)")}---------`));

do{
let myBalance = 50000;
let myPin = 1234;

let pinAnswer = await inquirer.prompt([
    {name: "pin", message: chalk.grey.bold("Enter your pin"), type: "number"}
]);

if (pinAnswer.pin === myPin) {
    console.log(chalk.cyanBright.bold("Correct pin code!"));
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: chalk.grey.bold("Select one option"),
        type: "list",
        choices: ["Withdraw","Check Balance"]
    }
]);

if (operationAns.operation === "Withdraw"){

let amountAns = await inquirer.prompt([
    {
        name: "amount",
        message: chalk.grey.bold("Enter your amount"),
        type: "number"
    }
])
myBalance -= amountAns.amount;
console.log(chalk.grey.bold(`Your remaining balance:  ${chalk.yellowBright.bold(myBalance)}`));
}

else if (operationAns.operation === "Check Balance"){
    console.log(chalk.grey.bold(`Your Balance is ${chalk.yellowBright.bold(myBalance)}`));
}
}
else {
    console.log(chalk.redBright.bold("Pin is incorrect!"))
}
}while(true);