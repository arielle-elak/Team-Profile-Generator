// Template for HTML Generation

// Cycle through each Array

const generateHTML = pageContent => {

// Create the Manager HTML content based on user input using Manager class blueprint
const createManager = manager => {
        console.log("Generated Manager");
        return `
        <div class="col-12 col-sm-6 col-md-4 col-lg-4">
            <div class="card teamCard">
                <div class="card-header">
                    <h2>${manager.getName()}</h2>
                    <h3>${manager.getRole()}</h3>
                </div>
            <div class="outerGroup">
                <ul class="list-group list-group-flush innerGroup">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${manager.getEmail()}</li>
                </ul>
            </div>
        </div>
`;
};

// Create the Engineer HTML content based on user input using Engineer class blueprint
const createEngineer = engineer => {
        console.log("Generated Engineer");
        return `
        <div class="col-12 col-sm-6 col-md-4 col-lg-4">
            <div class="card teamCard">
                <div class="card-header">
                    <h2>${engineer.getName()}</h2>
                    <h3>${engineer.getRole()}</h3>
                </div>
            <div class="outerGroup">
                <ul class="list-group list-group-flush innerGroup">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub Username: ${engineer.getGitHub()}</li>
                </ul>
            </div>
        </div>
`;
};


// Create the Intern HTML content based on user input using Intern class blueprint
const createIntern = intern => {
        console.log("Generated Intern");
        return `
        <div class="col-12 col-sm-6 col-md-4 col-lg-4">
            <div class="card teamCard">
                <div class="card-header">
                    <h2>${intern.getName()}</h2>
                    <h3>${intern.getRole()}</h3>
                </div>
            <div class="outerGroup">
                <ul class="list-group list-group-flush innerGroup">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School Name: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
`;
};

const innerContent = [];

managerArr.forEach(manager => {
    innerContent.push(createManager(manager));
});

engineerArr.forEach(engineer => {
    innerContent.push(createEngineer(engineer));
});

internArr.forEach(intern => {
    innerContent.push(createIntern(intern));
});

return innerContent.join("");

};


// Write the HTML content
module.exports = pageContent => {
    return `
    <section class="container-fluid row managerCard">
        ${generateManager(managerArr)}
    </section>

    <section class="container-fluid row teamCardGroup">
        ${generateEngineer(engineerArr)}
    </section>

    <section class="container-fluid row teamCardGroup">
        ${generateIntern(internArr)}
    </section>
    `;
};


