/*
A badge for that license at top of README

# titleInput

## Description
descriptionInput to generate here

## Table of Contents
Links of each section title to pop up here, and when clicked, taken to the corresponding section

## Installation
installationInput

## Usage
usageInput

## License
licenseInput
noice that explains which license the application is covered under

## Contributing
contributionInput

## Tests
testInput

## Questions
`The link to my Github Profile here: https://github.com/${usernameInput}`
For any additional questions, please reach me at: emailInput

*/





// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'titleInput', //name is the name of the answer we're getting back
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'descriptionInput',
    },
    {
        type: 'input', 
        message: 'What are the installation instructions for your project?',
        name: 'installationInput',
    },
    {
        type: 'input', 
        message: 'Please provide the usage information for your project.',
        name: 'usageInput',
    },
    {
        type: 'input', 
        message: 'Please provide the contributing factors to develop your project.',
        name: 'contributionInput',
    },
    {
        type: 'input', 
        message: 'What are the test instructions for your project?',
        name: 'testInput',
    },
    {
        type: 'list', 
        message: 'What type of license will you choose for your project?',
        name: 'licenseInput',
        choices: [
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Pulic License 3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unilicense'
        ]
    },
    {
        type: 'input', 
        message: 'What is your GitHub username?',
        name: 'usernameInput',
    },
    {
        type: 'input', 
        message: 'What is your email address?',
        name: 'emailInput',
    },
];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

const writeToFile = (response) => {
    //how to grab their selections in the choices
    //stringify their selections
    const stringifiedAnswer = JSON.stringify(response, null, 2);

    fs.writeFile(`${response.nameInput.toLowerCase()}.json`, stringifiedAnswer, (err) => {
        err ? console.error(err) : console.log("Written to file")
    })
}



// TODO: Create a function to initialize app
//function init() {}

const init = () => {
    inquirer
        .prompt(questions)
        //.then((response) => console.log(response)) //whatever gets passed in () is going to receive in an object format, the answers the user provided
        .then(writeToFile)
}




// Function call to initialize app
init();


//to test this, run in terminal = node index.js