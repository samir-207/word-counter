#! /usr/bin/env node
import inquirer from 'inquirer'

const userInput: {
    sentence: string
} = await inquirer.prompt(
    [
        {
            message: "Enter your para/sentence :",
            type: "input",
            name: "sentence"
        }
    ]
)

const words = userInput.sentence.trim().split(" ")

console.log(words);

console.log(`Total number of words : ${words.length}`)