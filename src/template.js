// Template for HTML Generation

// Cycle through each Array

const generateHTML = renderHTML => {

function generateManager(managerArr) {
    if (managerArr.length > 0) {
        for (const manager of managerArr) {
            createManager(manager);
        };
    };
};


function generateEngineer(engineerArr) {
    if (engineerArr.length > 0) {
        for (const engineer of engineerArr) {
            createEngineer(engineer);
        };
    };
};


function generateIntern(internArr) {
    if (internArr.length > 0) {
        for (const intern of internArr) {
            createIntern(intern);
        };
    };
};

// Create the Manager HTML content based on user input using Manager class blueprint

function createManager(manager) {
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
`
};

// Create the Engineer HTML content based on user input using Engineer class blueprint
function createEngineer(engineer) {
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
`
};


// Create the Intern HTML content based on user input using Intern class blueprint


function createIntern(intern) {
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
`
};

// Write the HTML content
function generateHTML(managerArr, engineerArr, internArr) {

    return`<!--Team Profile Generator HTML-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--Boostrap and Responsive Viewport-->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>My Team</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <section class="container-fluid row managerCard">
        ${generateManager(managerArr)}
    </section>
    <section class="container-fluid row teamCardGroup">
        ${generateEngineer(engineerArr)}
    </section>
    <section class="container-fluid row teamCardGroup">
        ${generateIntern(internArr)}
    </section>
</body>
</html>
`
};
};


module.exports = renderHTML => {
    generateHTML();
}