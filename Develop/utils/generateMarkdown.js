// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }

  return "";
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `[License](##License)`
  }

  return "";
};



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    This project is under the ${license} license`
  }

  return "";
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}


  ## Table of Contents
  - [Description](## Description)
  - [Installation](## Installation)
  - [Usage](## Usage)
  - ${renderLicenseLink(data.license)}

  - [Contribution](## Contribution)
  - [Tests](## Tests)
  - [Questions](## Questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}
  
  ## Contribution
  ${data.contribution}
  
  ## Tests
  ${data.test}
  
  ## Questions
  The link to my Github Profile here: https://github.com/${data.username}.
  For any additional questions, please reach me at: ${data.email}.
`
;
}

module.exports = generateMarkdown;
