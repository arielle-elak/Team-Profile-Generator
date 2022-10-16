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
            askMember(answers)
        )
};

// Start the team adding process
function askMember(answers) {
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
            addMember(answers))
};

function addMember(answers) {
    switch (answers.teamMember) {
        case "Add an Engineer":
            addEngineer();
            break;
        case "Add an Intern":
            addIntern();
            break;
        case "Team is Complete":
            finishTeam();
            break;
    };
};

function addEngineer() {
    //console.log("Chose to add an Engineer")
    return inquirer
        .prompt([
            {
                type: "input",
                name: "engName",
                message: "What is the Engineer's Name?"
            },

            {
                type: "input",
                name: "engID",
                message: (answers) => `${answers.engName}'s Employee ID:`
            },

            {
                type: "input",
                name: "engEmail",
                message: (answers) => `${answers.engName}'s Email Address:`
            },

            {
                type: "input",
                name: "engGit",
                message: (answers) => `${answers.engName}'s GitHub Username:`
            }

        ])
        .then((answers) =>
            console.log(`${answers.engName} | ${answers.engID} | ${answers.engEmail} | ${answers.engGit}` )
    )

};

function addIntern() {
    //console.log("Chose to add an Engineer")
    return inquirer
        .prompt([
            {
                type: "input",
                name: "intName",
                message: "What is the Intern's Name?"
            },

            {
                type: "input",
                name: "intID",
                message: (answers) => `${answers.intName}'s Employee ID:`
            },

            {
                type: "input",
                name: "intEmail",
                message: (answers) => `${answers.intName}'s Email Address:`
            },

            {
                type: "input",
                name: "intSchool",
                message: (answers) => `${answers.intName}'s GitHub Username:`
            }

        ])
        .then((answers) =>
            console.log(`${answers.intName} | ${answers.intID} | ${answers.intEmail} | ${answers.intSchool}` )
    )

};

function finishTeam() {
    console.log("Your team is Complete! Please see the dist/ directory for your finished HTML file.")
};



// Initiate the addTeam function to start asking questions
startApp();
