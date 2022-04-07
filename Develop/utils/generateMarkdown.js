// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let text;

  switch(license) {
    default:
      text = '';
      break;
    case 'BSD':
      text = '[BSD](https://choosealicense.com/licenses/bsd-2-clause/)';
      break;
    case 'MIT':
      text = '[MIT](https://choosealicense.com/licenses/mit/)';
      break;
    case 'GNU':
      text = '[GNU](https://choosealicense.com/licenses/gpl-2.0/)';
      break;
  };
  return text;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    return 'This application is covered by a ' + renderLicenseLink(license) + ' license.'
  } else {
    return ''
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)
  
  ## Description 
  ${data.description}
  
  ## Installation 
  ${data.install}
  
  ## Usage 
  ${data.usage}
  
  ## License 
  ${renderLicenseSection}
  
  ## Contributing 
  ${data.contributors}
  
  ## Tests
  ${data.test}
  
  ## Questions
  If you have any questions about this projects, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
