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
            'Apache_2.0',
            'GPLv3',
            'MIT',
            'BSD_2--Clause',
            'BSD_3--Clause',
            'Boost_1.0',
            'CC0_1.0',
            'EPL_2.0',
            'AGPL_v3',
            'GPL_v2',
            'MPL_2.0',
            'Unlicense'
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