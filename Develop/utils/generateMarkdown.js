// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

let licenseBadge =  `![Static Badge](https://img.shields.io/badge/license-${data.license}-blue)`;
let requestUrl = 'https://api.github.com/licenses'
let redirectUrl = `http://choosealicense.com/licenses/${spdx_id}/`


function renderLicenseBadge(license) {
  
  if (`${data.license}` ==! 'None') {
    return licenseBadge;
  }

  if (data.license === 'None') {
    `${data.license}` === "";
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (`${data.license}` ==! 'None') {

    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      for (var i = 0; i < data.length; i++) {
      if (`${data.license}` === data[i].name) {
        return data[i].spdx_id;
        return redirectUrl;
        
      }
      }



  })

  if (`${data.license}` === 'None') {
    `${data.license}` === "";
  }
}}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (`${data.license}` ==! 'None') {
    
  }

  if (data.license === 'None') {
    `${data.license}` === "";
  }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return`
  # ${data.title}

  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contribution](#Contribution)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}
  
  ## Contribution
  ${data.contribution}
  
  ## Tests
  ${data.test}
  
  ## Questions
  The link to my Github Profile here: https://github.com/${data.username}.
  For any additional questions, please reach me at: ${data.email}.
`;
}

module.exports = generateMarkdown;
