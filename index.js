// App dependencies
const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const createHTML = require('./src/template')

// Arrays for capturing input during inquirer
var managerArr = [];
var memberArr = [];

// Start the app and
// Create new Manager object from Manager blueprint, taken from Employee master and push to manager array
function startApp() {
    inquirer.prompt(managerPrompts)
    .then((answers) => {
        const manager = new Manager(
            answers.managerName,
            answers.managerID,
            answers.managerEmail,
            answers.managerPhone
        );
        managerArr.push(manager);
        console.log(manager);
        console.log(managerArr);
        askMember(answers);
    });
}


// Create new Engineer object from Manager blueprint, taken from Employee master and push to member array
function addEngineer() {
    inquirer.prompt(engineerPrompts)
    .then((answers) => {
        const engineer = new Engineer(
            answers.engName,
            answers.engID,
            answers.engEmail,
            answers.engGit
        );
        memberArr.push(engineer);
        console.log(engineer);
        console.log(memberArr);
        askMember(answers);
    });
}

// Create new Intern object from Manager blueprint, taken from Employee master and push to member array
function addIntern() {
    inquirer.prompt(internPrompts)
    .then((answers) => {
        const intern = new Intern(
            answers.intName,
            answers.intID,
            answers.intEmail,
            answers.intSchool
        );
        memberArr.push(intern);
        console.log(intern);
        console.log(memberArr);
        askMember(answers);
    });
}

// Finish team and generate the HTML based on the array responses
function finishTeam() {
    console.log("Your team is Complete! Please see the dist/ directory for your finished HTML file.")
    createHTML();
};


// Prompts to ask for Manager
const managerPrompts = [
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

];

// Prompts to ask for Engineer
const engineerPrompts = [
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
];

// Prompts to ask for Intern
const internPrompts = [
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
];



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





// Initiate the addTeam function to start asking questions
startApp();
