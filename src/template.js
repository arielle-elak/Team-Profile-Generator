// Template for HTML Generation

// Cycle through each Array

const generateHTML = (managerArr, engineerArr, internArr) => {
    console.log("Passed arrays: " + managerArr, engineerArr, internArr)

    // Create the Manager HTML content based on user input using Manager class blueprint
    const createManager = manager => {
            console.log("createManager triggered");
        return `
        <section class="row teamCardGroup">
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
                            <li class="list-group-item">Office Phone: ${manager.getOfficeNumber()}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="row teamCardGroup">
    `;
    };

    // Create the Engineer HTML content based on user input using Engineer class blueprint
    const createEngineer = engineer => {
            console.log("createEngineer triggered");
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
            </div>
    `;
    };


    // Create the Intern HTML content based on user input using Intern class blueprint
    const createIntern = intern => {
            console.log("createIntern triggered");
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
            </div>
    `;
    };

    // Create a new instance of each employee type for each entry in the array
    // Publish the final return of the generateHTML function which contains the innerContent

    const innerContent = [];

    if (!managerArr) {
        console.log("No manager found. Please start from the beginning.");
        startApp();
    } else {
        managerArr.forEach(manager => {
            innerContent.push(createManager(manager));
            console.log("Manager created from " + managerArr);
        });
    };

    if (!engineerArr) {
        console.log("No Engineers Added");
    } else {
        engineerArr.forEach(engineer => {
            innerContent.push(createEngineer(engineer));
            console.log("Engineer created from " + engineerArr);
        });
    };

    if (!internArr) {
        console.log("No Interns Added");
    } else {
        internArr.forEach(intern => {
            innerContent.push(createIntern(intern));
            console.log("Intern created from " + internArr);
        });
    };

    return innerContent.join("");

    };


    // Write the HTML content from the pageContent object
    module.exports = (managerArr, engineerArr, internArr) => {
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

        <div class="container-fluid">


                ${generateHTML(managerArr, engineerArr, internArr)}
            </section>

        </div>

    </body>
    </html>
        `;
    };
