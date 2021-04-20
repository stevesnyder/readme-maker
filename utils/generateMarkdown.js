// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
// ![badge](https://img.shields.io/badge/license-${questions.license}-brightgreen)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// 'https://opensource.org/licenses/Apache-2.0'
// 'https://opensource.org/licenses/MIT'
// 'https://www.gnu.org/licenses/gpl-3.0'
// 'https://opensource.org/licenses/BSD-3-Clause'
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // if (license == 'None'){
  //   return '';
  // }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

  Developed by: ${data.username}

  ## Table of Contents

  - [About the Project](#about-the-project)
  - [Important Commands](#important-commands)
  - [About the Repo](#about-the-repo)
  - [Contact](#contact)

  ## About the Project

  ${data.description}

  ## Important Commands

  ### To install dependencies: 

  ${data.dependencies}

  ### To run tests:

  ${data.tests}

  ## About the Repo

  ### Using the Repo

  ${data.repoInfo}

  ### Contributing to the Repo

  ${data.repoContributions}

  ## License

  This project is licensed under <a href=${renderLicenseLink(data.license)}>${data.license}</a>

  ### Contact

  Contact ${data.email} with any questions or concerns.
`;
}

module.exports = generateMarkdown;
