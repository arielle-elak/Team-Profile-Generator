// App dependencies
const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Start the team adding process
function addTeam() {
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
            },

            {
                type: "list",
                name: "teamMember",
                message: `Would you like to add a member to this team?`,
                choices: ["Add an Engineer", "Add an Intern", "Team is Complete"],
            }
        ])
        .then((answers) =>
            console.log(`${answers.managerName} | ${answers.managerID} | ${answers.managerEmail} | ${answers.managerPhone} | ${answers.teamMember}`)
        )
};

// Initiate the addTeam function to start asking questions
addTeam();
