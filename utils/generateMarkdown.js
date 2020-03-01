function generateMarkdown(data) {
  return `
# Project Title
${data.title}

# Project Description
${data.description}

# Table of Contents
${data.contents}

# Installation
${data.installation}

# Usasge
${data.usage}

# License
${data.license}

# Contributors
${data.contributors}

# Tests
${data.tests}

# Future Development
${data.future}
`;
}

module.exports = generateMarkdown;
