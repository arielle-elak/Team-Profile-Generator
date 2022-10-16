// Sub class of Employee
const Employee = require('./Employee');

// Manager class uses name id and email from employee parent class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }
    
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;
