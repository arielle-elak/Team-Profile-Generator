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
        message: "(ง︡'-'︠)ง Team Manager\n-------------------\n\nWhat is the Team Manager's Full Name?",
        validate: async (input) => {
            if (!input) {
                return 'Manager name cannot be blank.'
            }
            return true;
        }
    },

    {
        type: "input",
        name: "managerID",
        message: (answers) => `${answers.managerName}'s Employee ID:`,
        validate: async (input) => {
            if (isNaN(input)) {
                return "ID must contain numbers only."
            }
            return true;
        }
    },

    {
        type: "input",
        name: "managerEmail",
        message: (answers) => `${answers.managerName}'s Email Address:`,
        validate: async (input) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(input)) {
                return "Please provide a valid email address."
            }
            return true
        }
    },

    {
        type: "input",
        name: "managerPhone",
        message: (answers) => `${answers.managerName}'s Phone Number:`,
        validate: async (input) => {
            if (isNaN(input)) {
                return "Phone number must contain numbers only."
            }
            return true;
        }
    }

];

// Prompts to ask for Engineer
const engineerPrompts = [
    {
        type: "input",
        name: "engName",
        message: "\n\n└(￣◇￣)┐ Engineer\n-------------------\n\nWhat is the Engineer's Full Name?",
        validate: async (input) => {
            if (!input) {
                return 'Engineer name cannot be blank.'
            }
            return true;
        }
    },

    {
        type: "input",
        name: "engID",
        message: (answers) => `${answers.engName}'s Employee ID:`,
        validate: async (input) => {
            if (isNaN(input)) {
                return "ID must contain numbers only."
            }
            return true;
        }
    },

    {
        type: "input",
        name: "engEmail",
        message: (answers) => `${answers.engName}'s Email Address:`,
        validate: async (input) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(input)) {
                return "Please provide a valid email address."
            }
            return true
        }
    },

    {
        type: "input",
        name: "engGit",
        message: (answers) => `${answers.engName}'s GitHub Username:`,
        validate: async (input) => {
            if (!input) {
                return 'GitHub username cannot be blank.'
            }
            return true;
        }
    }
];

// Prompts to ask for Intern
const internPrompts = [
    {
        type: "input",
        name: "intName",
        message: "\n\nˁ(OᴥO)ˀ Intern\n-------------------\n\nWhat is the Intern's Full Name?",
        validate: async (input) => {
            if (!input) {
                return 'Intern name cannot be blank.'
            }
            return true;
        }
    },

    {
        type: "input",
        name: "intID",
        message: (answers) => `${answers.intName}'s Employee ID:`,
        validate: async (input) => {
            if (isNaN(input)) {
                return "ID must contain numbers only."
            }
            return true;
        }
    },

    {
        type: "input",
        name: "intEmail",
        message: (answers) => `${answers.intName}'s Email Address:`,
        validate: async (input) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(input)) {
                return "Please provide a valid email address."
            }
            return true
        }
    },

    {
        type: "input",
        name: "intSchool",
        message: (answers) => `${answers.intName}'s School Name:`,
        validate: async (input) => {
            if (!input) {
                return 'School name cannot be blank.'
            }
            return true;
        }
    }
];


// Start the app and
// Create new Manager object from Manager blueprint, taken from Employee master and push to manager array
// Then call HTML generation function
function startApp() {

    console.log(
        '\n¸.·´¯`·.´¯`·.¸¸.·´¯`·.¸><(((º>\n\nThank you for using the Team Generator.\nPlease follow the prompts and your final page will appear in index.html inside the /dist directory.\n\n¸.·´¯`·.´¯`·.¸¸.·´¯`·.¸\n'
      );

    inquirer.prompt(managerPrompts)
        .then((answers) => {
            const manager = new Manager(
                answers.managerName,
                answers.managerID,
                answers.managerEmail,
                answers.managerPhone
            );
            managerArr.push(manager);
            // console.log(managerArr);
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
                // console.log(engineerArr);
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
                // console.log(internArr)
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
                // console.log("Add an Engineer current arrays:\n" + managerArr, engineerArr, internArr)
                addEngineer();
                break;
            case "Add an Intern":
                // console.log("Add an Intern current arrays:\n" + managerArr, engineerArr, internArr);
                addIntern();
                break;
            case "Team is Complete":
                // console.log("At Team Complete: \n" + managerArr, engineerArr, internArr);
                // Finish team and generate the HTML within the dist folder to the index.html file
                if (!fs.existsSync(DIST_DIR)) {
                    fs.mkdirSync(DIST_DIR)
                };

                fs.writeFileSync(contents, generateHTML(managerArr, engineerArr, internArr), 'utf-8');

                console.log(
                    "\n\n●▬▬▬▬๑۩۩๑▬▬▬▬▬●\n\nYour team is Complete!\nPlease see the dist/ directory for your finished HTML file.\nThank you again for using Team Generator!\n\n●▬▬▬▬๑۩۩๑▬▬▬▬▬●\n\n");

                break;
        };
    };
};


// Initiate the addTeam function to start asking questions
startApp();
