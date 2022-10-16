// Employee Parent Class
const inquirer = require("inquirer");

class Employee {
    addTeam() {
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
                    message: (answers) => `What is ${answers.managerName}'s Employee ID?`
                },

                {
                    type: "input",
                    name: "managerEmail",
                    message: (answers) => `What is ${answers.managerName}'s Email Address?`
                },

                {
                    type: "input",
                    name: "managerPhone",
                    message: (answers) => `What is ${answers.managerName}'s Phone Number?`
                }
            ])
            .then((answers) =>
                console.log(`${answers.managerName} | ${answers.managerID} | ${answers.managerEmail} | ${answers.managerPhone}`)
            )
    }
};


/*

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(name) {
        return name;

    };

    getId(id) {
        return id;

    };

    getEmail(email) {
        return email;

    };

    getRole() {
        return "Employee";

    };

}
*/

module.exports = Employee
