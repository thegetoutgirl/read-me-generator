function generateMarkdown(data) {
  return `
# Project Title
${data.title}

<img src = "https://img.shields.io/github/last-commit/thegetoutgirl/read-me-generator"> <img src ="https://img.shields.io/badge/current%20status-%F0%9F%92%A5-white">

# Project Description
${data.description}

# Table of Contents

  ### Installation
  ### Usage
  ### License
  ### Contributing
  ### Tests
  ### Future Development

# Installation
${data.installation}

# Usasge
${data.usage}

# License
${data.license}

# Contributing
${data.contributing}

# Tests
${data.tests}

# Future Development
${data.future}

# Questions
<img src="${data.avatar_url}" alt= "GitHubUser" width="60" height="60" />

`;
}

module.exports = generateMarkdown;
