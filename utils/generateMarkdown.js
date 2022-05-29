// include the license array of objects
const licenses = require('./softwareLicenses.js');



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  // TODO: Create a function that returns a license badge based on which license is passed in
  // If there is no license, return an empty string
  
  let licenseBadge = licenses.find(object => {
    return object.fullName === data.license;
  });
  // console.log(licenseBadge);
  return `
  <h1 align="center">${data.title}</h1><br/>

  ${licenseBadge.badge} <br/><br/>

  ## Description
  ${data.description} <br/><br/>

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Testing](#testing)
  - [Questions](#questions)

  ## Installation
  ${data.installation} <br/><br/>

  ## Usage
  ${data.usage} <br/><br/>

  ## Software License
  ${licenseBadge.badge} <br/>
  This software is licensed under the "${licenseBadge.fullName}" license.<br/>
  ${licenseBadge.link} <br/><br/>

  ## Contributors
  ${data.contributors} <br/><br/>

  ## Testing
  ${data.tests} <br/><br/>

  ## Questions
  If you  hvae questions, you can:
  - :eyes: Find me on GitHub: [${data.github}](https://github.com/${data.github}), or<br />
  - :email: Email me: ${data.email}<br /><br />

  _This README was generated with :heart: by [README-generator](https://github.com/rstanbaugh/README-Generator) :fire: :fire:_


`;
// console.log("license = ",licenses.find(object => {
//   return object.name ===data.license;
// }));

}
// console.log(licenses);
module.exports = generateMarkdown;
