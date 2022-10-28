// Test for Intern object
// Initiate test reference
const Intern = require("../lib/Intern");

// Test: Constructor contains name, id, email and school
test('Intern Blueprint', () => {
    const testname = "George Foreman";
    const testid = 5435435;
    const testemail = "george.foreman@mail.com";
    const testschool = "george-foreman";
    const test = new Intern(testname, testid, testemail, testschool);
    expect(test.name).toBe(testname);
    expect(test.id).toBe(testid);
    expect(test.email).toBe(testemail);
    expect(test.school).toBe(testschool);
});

// Test: getSchool() returns school
test('Intern Blueprint: getSchool() returns school', () => {
    const testschool = "george-forman";
    const test = new Intern("George Forman", 5435435, "george.foreman@mail.com", testschool);
    expect(test.getSchool()).toBe(testschool);
});

// Test: getRole() returns Intern
test('Intern Blueprint: getRole() returns Intern', () => {
    const testrole = "Intern";
    const test = new Intern("George Forman", 5435435, "george.foreman@mail.com");
    expect(test.getRole()).toBe(testrole);
});
