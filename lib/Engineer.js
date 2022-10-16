// Sub class of Employee
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    }

    getGitHub() {
        return github
    }

    getRole() {
        return "Engineer";
    }
}
