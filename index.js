// inquirer is a cli for Node.js
import inquirer from 'inquirer';
const userInput = await inquirer.prompt([
    {
        message: "Enter your para/sentence :",
        type: "input",
        name: "sentence"
    }
]);
const words = userInput.sentence.trim().split(" ");
console.log(words);
console.log(`Total number of words : ${words.length}`);
