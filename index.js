// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? ',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address? ',
      },
      {
        type: 'input',
        name: 'projectName',
        message: 'What is your project\'s name? ',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project: ',
      },
      {
        type: 'list',
        name: 'license',        
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
      },
      {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies? ',
        default: 'npm i',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests? ',
        default: 'npm test',
      },
      {
        type: 'input',
        name: 'repoInfo',
        message: 'What does the user need to know about using the repo? ',
      },
      {
        type: 'input',
        name: 'repoContributions',
        message: 'What does the user need to know about contributing to the repo? ',
      },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('README.md generated successfully');
});
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((res) => {
       writeToFile('README.md', generateMarkdown({...res}));
    });
}

// Function call to initialize app
init();
