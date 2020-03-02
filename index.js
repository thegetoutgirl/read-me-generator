const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");
const api = require("./utils/api.js")

const writeFileAsync = util.promisify(fs.writeFile);

function autoReadMePrompt() {
    console.log("Hi");
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Project Name:"
        },
        {
            type: "input",
            name: "description",
            message: "Description:"
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
            name: "contributing",
            message: "Guidelines for others to contribute to your project:"
        },
        {
            type: "input",
            name: "tests",
            message: "Tests & examples:"
        },
        {
            type: "input",
            name: "future",
            message: "Describe any future opportunities for development:"
        },
        {
            type: "input",
            name: "githubID",
            message: "Enter your GitHub username:"
        }
    ]);
}

async function init() {
    try {
        const answers = await autoReadMePrompt();

        const userData = await api.getUser(answers.githubID);
            console.log(userData.avatar_url);
            answers.avatar_url = userData.avatar_url;

        const doc = generateMarkdown(answers);

        await writeFileAsync("readme-demo.md", doc);

     } catch (err) {
        console.log(err);
    }
}

init();