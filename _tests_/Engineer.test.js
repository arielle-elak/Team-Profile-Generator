// Test for Engineer object
// Initiate test reference
const Engineer = require("../lib/Engineer");

// Test: Constructor contains name, id, email and github
test('Engineer Blueprint', () => {
    const testname = "George Foreman";
    const testid = 5435435;
    const testemail = "george.foreman@mail.com";
    const testgithub = "george-foreman";
    const test = new Engineer(testname, testid, testemail, testgithub);
    expect(test.name).toBe(testname);
    expect(test.id).toBe(testid);
    expect(test.email).toBe(testemail);
    expect(test.github).toBe(testgithub);
});

// Test: getGitHub() returns github
test('Engineer Blueprint: getGitHub() returns github', () => {
    const testgithub = "george-forman";
    const test = new Engineer("George Forman", 5435435, "george.foreman@mail.com", testgithub);
    expect(test.getGitHub()).toBe(testgithub);
});

// Test: getRole() returns Engineer
test('Engineer Blueprint: getRole() returns Engineer', () => {
    const testrole = "Engineer";
    const test = new Engineer("George Forman", 5435435, "george.foreman@mail.com");
    expect(test.getRole()).toBe(testrole);
});
