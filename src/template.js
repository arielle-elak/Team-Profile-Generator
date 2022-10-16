// Template for HTML Generation

// Create the Manager HTML content based on user input
function createManager() {
    for (const Manager of managerArr) {
        return `
        <div class="col-12 col-sm-6 col-md-4 col-lg-4">
        <div class="card teamCard">
            <div class="card-header">
                <h2>${Manager.name}</h2>
                <h3>Manager</h3>
            </div>
        <div class="outerGroup">
            <ul class="list-group list-group-flush innerGroup">
                <li class="list-group-item">ID: ${Manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${Manager.email}">${Manager.email}</a></li>
                <li class="list-group-item">Office number: ${Manager.officeNumber}</li>
            </ul>
        </div>
        `
    };
};

// Create the Engineer HTML content based on user input
function createEngineer() {
    for (const Engineer of teamArr) {
        return `
        <div class="col-12 col-sm-6 col-md-4 col-lg-4">
        <div class="card teamCard">
            <div class="card-header">
                <h2>${Engineer.name}</h2>
                <h3>Engineer</h3>
            </div>
        <div class="outerGroup">
            <ul class="list-group list-group-flush innerGroup">
                <li class="list-group-item">ID: ${Engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a></li>
                <li class="list-group-item">GitHub Username: ${Engineer.github}</li>
            </ul>
        </div>
        `
    };
};

// Create the Intern HTML content based on user input
function createIntern() {
    for (const Intern of teamArr) {
        return `
        <div class="col-12 col-sm-6 col-md-4 col-lg-4">
        <div class="card teamCard">
            <div class="card-header">
                <h2>${Intern.name}</h2>
                <h3>Engineer</h3>
            </div>
        <div class="outerGroup">
            <ul class="list-group list-group-flush innerGroup">
                <li class="list-group-item">ID: ${Intern.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${Intern.email}">${Intern.email}</a></li>
                <li class="list-group-item">School: ${Intern.school}</li>
            </ul>
        </div>
        `
    };
};

function createHTML() {

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
    ${createManager()}
    </section>

    <section class="container-fluid row teamCardGroup">
    ${createEngineer()}
    ${createIntern()}
    </section>

</body>
</html>
`
};