// App dependencies
const inquirer = require("inquirer");
const path = require('path');
const fs = require('fs');


const Manager = require("./lib/Manager");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateHTML = require('./src/template');

 // Arrays for capturing input during inquirer
 const managerArr = [];
 const engineerArr = [];
 const internArr = [];

// Constants for file writing
const DIST_DIR = path.resolve(__dirname, 'dist');
const contents = path.join(DIST_DIR, 'index.html');

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
        message: (answers) => `${answers.intName}'s School Name:`
    }
];


// Start the app and
// Create new Manager object from Manager blueprint, taken from Employee master and push to manager array
// Then call HTML generation function
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
            console.log(managerArr);
            askMember(answers);
        });



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
                engineerArr.push(engineer);
                console.log(engineerArr);
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
                internArr.push(intern);
                console.log(internArr)
                askMember(answers);
            });
    }




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
                console.log("Add an Engineer current arrays:\n" + managerArr, engineerArr, internArr)
                addEngineer();
                break;
            case "Add an Intern":
                console.log("Add an Intern current arrays:\n" + managerArr, engineerArr, internArr);
                addIntern();
                break;
            case "Team is Complete":
                console.log("At Team Complete: \n" + managerArr, engineerArr, internArr);
                // Finish team and generate the HTML within the dist folder to the index.html file
                if (!fs.existsSync(DIST_DIR)) {
                    fs.mkdirSync(DIST_DIR)
                };

                fs.writeFileSync(contents, generateHTML(managerArr, engineerArr, internArr), 'utf-8');

                console.log("Your team is Complete! Please see the dist/ directory for your finished HTML file.");

                break;
        };
    };
};


// Initiate the addTeam function to start asking questions
startApp();
