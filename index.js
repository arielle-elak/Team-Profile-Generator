// App dependencies
const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Start the team adding process
function startApp() {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the Team Manager's Full Name?"
            },

            {
                type: "input",
                name: "managerID",
                message: (answers) => `${answers.managerName}'s Employee ID:`
            },

            {
                type: "input",
                name: "managerEmail",
                message: (answers) => `${answers.managerName}'s Email Address:`
            },

            {
                type: "input",
                name: "managerPhone",
                message: (answers) => `${answers.managerName}'s Phone Number:`
            }

        ])
        .then((answers) =>
            addMember(answers)
        )
};

// Start the team adding process
function addMember(answers) {
    return inquirer
        .prompt([
            {
                type: "list",
                name: "teamMember",
                message: `Would you like to add a member to ${answers.managerName}'s team?`,
                choices: ["Add an Engineer", "Add an Intern", "Team is Complete"],
            }

        ])
        .then((answers) =>
            console.log(answers.teamMember)
        )
};

// Initiate the addTeam function to start asking questions
startApp();
