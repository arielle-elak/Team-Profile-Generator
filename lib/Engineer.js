// Sub class of Employee
const Employee = require('./Employee');

// Engineer class uses the name id and email from the parent class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGitHub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
};

module.exports = Engineer;
