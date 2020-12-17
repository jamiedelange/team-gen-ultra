const generatePage = (objects) => {

    var pageString = `<!DOCTYPE html>
        <html lang="en">
    
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Generator</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        </head>
    
        <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
            <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
            <nav class="flex-row">
                <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/jamiedelange">GitHub</a>
            </nav>
            </div>
        </header>
        <main>
        <section class="boxes">` 

    var i;
    for (i = 0; i < objects.length; i++) {
        var obj = objects[i]

        if (obj.getRole() === "Manager") {
        pageString += `
            <div id="box" class="box">
                <div class="boxhead">
                    <h2 class="name">${obj.name}</h2>
                    <h3 class="role">${obj.getRole()}</h3>
                </div>
                <div class="boxsection">
                    <h5 class="id">ID: ${obj.id}</h5>
                    <h5 class="email">E-mail: <a href="mailto:${obj.email}">${obj.email}</a></h5>
                    <h5 class="office">Office number: ${obj.office}</h5>
                </div>
            </div>`;
        } else if (obj.getRole() === "Engineer") {
            pageString += `
            <div id="box" class="box">
                <div class="boxhead">
                    <h2 class="name">${obj.name}</h2>
                    <h3 class="role">${obj.getRole()}</h3>
                </div>
                <div class="boxsection">
                    <h5 class="id">ID: ${obj.id}</h5>
                    <h5 class="email">E-mail: ${obj.email}</h5>
                    <h5 class="office">Github username: ${obj.github}</h5>
                </div>
            </div>`
        } else if (obj.getRole() === "Intern") {
            pageString += `
            <div id="box" class="box">
                <div class="boxhead">
                    <h2 class="name">${obj.name}</h2>
                    <h3 class="role">${obj.getRole()}</h3>
                </div>
                <div class="boxsection">
                    <h5 class="id">ID: ${obj.id}</h5>
                    <h5 class="email">E-mail: ${obj.email}</h5>
                    <h5 class="office">School: ${obj.school}</h5>
                </div>
            </div>`
        }
    } 
    pageString +=
        `
        </section>
        </main>
            <footer class="container text-center py-3">
                <h3 class="text-dark">&copy; 2020 by jamie</h3>
            </footer>
        </body>
        </html>`

    return pageString;
};

module.exports = { generatePage };
