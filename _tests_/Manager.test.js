// Test for Manager object
// Initiate test reference
const Manager = require("../lib/Manager");

// Test: Constructor contains name, id, email and office number
test('Manager Blueprint', () => {
    const testname = "George Foreman";
    const testid = 5435435;
    const testemail = "george.foreman@mail.com";
    const testofficeNumber = 1234567890;
    const test = new Manager(testname, testid, testemail, testofficeNumber);
    expect(test.name).toBe(testname);
    expect(test.id).toBe(testid);
    expect(test.email).toBe(testemail);
    expect(test.officeNumber).toBe(testofficeNumber);
});

// Test: getOfficeNumber() returns office number
test('Manager Blueprint: getOfficeNumber() returns officeNumber', () => {
    const testofficeNumber = 1234567890;
    const test = new Manager("George Forman", 5435435, "george.foreman@mail.com", testofficeNumber);
    expect(test.getOfficeNumber()).toBe(testofficeNumber);
});


// Test: getRole() returns "Manager"
test('Manager Blueprint: getRole() returns Manager', () => {
    const testrole = "Manager";
    const test = new Manager("George Forman", 5435435, "george.foreman@mail.com");
    expect(test.getRole()).toBe(testrole);
});
