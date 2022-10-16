// Employee Parent Class
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
