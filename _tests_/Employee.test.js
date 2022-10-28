// Test for Employee object
// Initiate test reference
const { TestScheduler } = require("jest");
const Employee = require("../lib/Employee");

// Test: Parent constructor contains name, id, and email
test('Employee Blueprint', () => {
    const name = "George Foreman";
    const id = 5435435;
    const email = "george.foreman@mail.com";
    const test = new Employee(name, id, email);
    expect(test.name).toBe(name);
    expect(test.id).toBe(id);
    expect(test.email).toBe(email);
});

// Test: getName() returns name
test('Employee Blueprint: getName() returns name', () => {
    const name = "George Foreman";
    const test = new Employee(name);
    expect(test.getName()).toBe(name);
});

// Test: getId() returns id
test('Employee Blueprint: getId() returns id', () => {
    const testid = 5435435;
    const test = new Employee("George Forman", testid);
    expect(test.getId()).toBe(testid);
});

// Test: getEmail() returns email
test('Employee Blueprint: getEmail() returns email', () => {
    const testemail = "george.foreman@mail.com";
    const test = new Employee("George Forman", 5435435, testemail);
    expect(test.getEmail()).toBe(testemail);
});

// Test: getRole() returns "Employee"
test('Employee Blueprint: getRole() returns Employee', () => {
    const testrole = "Employee";
    const test = new Employee("George Forman", 5435435, "george.foreman@mail.com");
    expect(test.getRole()).toBe(testrole);
});
