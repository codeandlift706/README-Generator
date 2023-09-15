// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title', //name is the name of the answer we're getting back
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions for your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide the usage information for your project.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please provide the contributing factors to develop your project.',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What are the test instructions for your project?',
        name: 'test',
    },
    {
        type: 'list',
        message: 'What type of license will you choose for your project?',
        name: 'license',
        choices: [
            'None',
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Pulic License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense'
        ]
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
];


//we take the inquirer responses and create README file, write the responses to the file

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile('README.md', generateMarkdown(data), (err) => {
        err ? console.error(err) : console.log("Written to file")
    })
} 

// TODO: Create a function to initialize app
//function init() {}

const init = () => {
    inquirer
        .prompt(questions)
        .then((data) => { //then when we get the answers
        console.log("generating README")
        writeToFile('README.md', data) //call this function passing readme as the filename and data
        })
}



// Function call to initialize app
init();


//to test this, run in terminal = node index.js