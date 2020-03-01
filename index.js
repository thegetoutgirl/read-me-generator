// This code came with the homework assignment

// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();

// Below this line are the in-class activities

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const markdown = require("./utils/generateMarkdown.js");
const api = require("./utils/api.js")

const writeFileAsync = util.promisify(fs.writeFile);

function autoReadMePrompt() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Project Name"
    },
    {
      type: "input",
      name: "description",
      message: "Description."
    },
    {
      type: "input",
      name: "contents",
      message: "Table of Contents:"
    },
    {
      type: "input",
      name: "installation",
      message: "Installation:"
    },
    {
      type: "input",
      name: "usage",
      message: "Instructions for use:"
    },
    {
      type: "input",
      name: "license",
      message: "License:"
    },
    {
        type: "input",
        name: "contributors",
        message: "List contributors:"
      },
      {
        type: "input",
        name: "tests",
        message: "Explain tests you have developed, and provide examples on how to use them."
      },
      {
        type: "input",
        name: "future",
        message: "Describe any future opportunities for development:"
      }
  ]);
}

async function init() {
  console.log("hi")
  try {
    const answers = await autoReadMePrompt();
    
    // const userData = api.getUser(answers.githubID);

    const doc = markdown(answers);

    await writeFileAsync("readme-demo.md", doc);

    console.log(doc);
  } catch(err) {
    console.log(err);
  }
}

init();