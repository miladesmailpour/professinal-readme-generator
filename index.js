// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [{ title: 'What is the project title?' },
{ desc_1: 'What was your motivation?' },
{ desc_2: 'Why did you build this project?' },
{ desc_3: 'What problem does it solve?' },
{ desc_4: 'What did you learn?' },
{ installation: 'What are the steps required to install your project?' },
{ deployLink: 'Please enter the deploy link, if is there any:' },
{ screenShot: 'please save your screenShot in "assets/images" and enter the full name "Screenshot.png":' },
{ license: 'Which license did you have on the project?' },
{ collaborator: 'Is there any collaborators do you want to mention?' },
{ test: 'Is there any test method do you want to share?' },
{ githubID: 'Please enter your GitHub username:' },
{ email: 'Please enter your email:' }]

// Turning the array of questions to the array of inquirer object question
const inquirerObjMacker = (questions) => {
    let obj = {}
    return questions.map((question) => {
        if (Object.keys(question)[0] != 'license') {
            obj = {
                type: 'input',
                message: Object.values(question)[0],
                name: Object.keys(question)[0]
            }
        }
        else {
            obj = {
                type: 'list',
                message: Object.values(question)[0],
                name: Object.keys(question)[0],
                choices: ['MIT License', 'Apache License 2.0', 'Mozilla Public License 2.0', 'GNU GPLv3', 'Boost Software License 1.0', 'The Unlicense'],
            }
        }
        return obj
    })
}
// Using inquirer to ask questions and return object with user answers
async function inquirerQuestioner(questions) {
    const answers = await inquirer
        .prompt(questions)
        .then((response) => {
            return response
        }
        );
    return answers
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
async function init() {
    const inquirerArrObj = inquirerObjMacker(questions)
    const answers = await inquirerQuestioner(inquirerArrObj)
    // place the userinput to the template to make readme
    const readme = generateMarkdown(answers)
    writeToFile('./README.md', readme)
}

// Function call to initialize app
init();





