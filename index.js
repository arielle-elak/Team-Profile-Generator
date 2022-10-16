// App dependencies
const inquirer = require("inquirer");
const fs = require('fs');

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');



// Arrays for capturing input during inquirer
var managerArr = [];
var teamArr = [];


// Start the app and
// Create new Manager object from Manager blueprint, taken from Employee master and push to manager array
// Then call HTML generation function
function startApp() {
    managerArr = [];
    teamArr = [];
    inquirer.prompt(managerPrompts)
    .then((answers) => {
        const manager = new Manager(
            answers.managerName,
            answers.managerID,
            answers.managerEmail,
            answers.managerPhone
        );
        managerArr.push(manager);
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
        teamArr.push(engineer);
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
        teamArr.push(intern);
        askMember(answers);
    });
}

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
function askMember() {
    return inquirer
        .prompt([
            {
                type: "list",
                name: "teamMember",
                message: `Would you like to add team member?`,
                choices: ["Add an Engineer", "Add an Intern", "Team is Complete"],
            }

        ])
        .then((answers) =>
            addMember(answers))
};

// Function to decide which function to go to based on selection
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

// Template for HTML Generation

// Create the Manager HTML content based on user input
function createManager() {
    for (const Manager of managerArr) {
        return `
        <div class="col-12 col-sm-6 col-md-4 col-lg-4">
            <div class="card teamCard">
                <div class="card-header">
                    <h2>${Manager.getName()}</h2>
                    <h3>${Manager.getRole()}</h3>
                </div>
            <div class="outerGroup">
                <ul class="list-group list-group-flush innerGroup">
                    <li class="list-group-item">ID: ${Manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${Manager.getEmail()}</li>
                </ul>
            </div>
        </div>
`
    };
    console.log("Generated Manager")
};

// Create the Engineer HTML content based on user input
function createTeamMember() {
    for (const Employee of teamArr) {
        return `
        <div class="col-12 col-sm-6 col-md-4 col-lg-4">
            <div class="card teamCard">
                <div class="card-header">
                    <h2>${getName(Employee)}</h2>
                    <h3>${getRole(Employee)}</h3>
                </div>
            <div class="outerGroup">
                <ul class="list-group list-group-flush innerGroup">
                    <li class="list-group-item">ID: ${getId(id)}</li>
                    <li class="list-group-item">Email: <a href="mailto:${getEmail(email)}">${getEmail(email)}</a></li>
                    <li class="list-group-item"></li>
                </ul>
            </div>
        </div>
        `
    };
    console.log(`Generated Team Member`)
};

function createHTML() {

    return`<!--Team Profile Generator HTML-->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--Boostrap and Responsive Viewport-->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>My Team</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>

    <section class="container-fluid row managerCard">
    ${createManager()}
    </section>

    <section class="container-fluid row teamCardGroup">
    ${createTeamMember()}
    </section>

</body>
</html>
`
};


// Function to write HTML file
function writeHTML(file, data) {
    return fs.writeFileSync(file, data);
}

// Finish team and generate the HTML based on the array responses
function finishTeam() {
    writeHTML('./dist/index.html', createHTML());
    console.log(managerArr);
    console.log(teamArr);
    console.log("Your team is Complete! Please see the dist/ directory for your finished HTML file.");
};



// Initiate the addTeam function to start asking questions
startApp();
