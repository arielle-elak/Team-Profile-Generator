// Sub class of Employee
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }

    getSchool() {

    }

    getRole() {
        return "Intern"
    }
}

module.exports = Intern;
