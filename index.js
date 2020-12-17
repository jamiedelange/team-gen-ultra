const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatePage = require("./src/page-template.js");

const objects = [];

function promptUser() {
    inquirer.prompt(
        {
            type: "list",
            name: "add",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add another member"]
        }
    )
    .then(answers => {
        if (answers.add === "Engineer") {
            inquirer
            .prompt([
                {
                    type: "text",
                    name: "name",
                    message: "What is your engineer's name?",
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter a name');
                            return false;
                        }
                    }
                },
                {
                    type: "text",
                    name: "id",
                    message: "What is your engineer's id?",
                    validate: idInput => {
                        if (idInput) {
                            return true;
                        } else {
                            console.log('Please enter an ID');
                            return false;
                        }
                    }
                },
                {
                    type: "text",
                    name: "email",
                    message: "What is your engineer's e-mail address?",
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log('Please enter an e-mail address');
                            return false;
                        }
                    }
                },
                {
                    type: "text",
                    name: "github",
                    message: "What is your engineer's github username?"
                }
            ]).then(answers => {
                var engineer = new Engineer(answers.name)
                engineer.id = answers.id
                engineer.email = answers.email
                engineer.github = answers.github
                objects.push(engineer);
                console.log(objects);
                promptUser();
            });

        } else if (answers.add === "Intern") {
            inquirer
            .prompt([
                {
                    type: "text",
                    name: "name",
                    message: "What is your intern's name?",
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter a name');
                            return false;
                        }
                    }
                },
                {
                    type: "text",
                    name: "id",
                    message: "What is your intern's id?",
                    validate: idInput => {
                        if (idInput) {
                            return true;
                        } else {
                            console.log('Please enter an ID');
                            return false;
                        }
                    }
                },
                {
                    type: "text",
                    name: "email",
                    message: "What is your intern's e-mail address?",
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log('Please enter an e-mail address');
                            return false;
                        }
                    }
                },
                {
                    type: "text",
                    name: "school",
                    message: "What school does/did your intern go to?"
                }
            ]).then(answers => {
                var intern = new Intern(answers.name)
                intern.id = answers.id
                intern.email = answers.email
                intern.school = answers.school
                objects.push(intern);
                console.log(objects);
                promptUser();
            });
        } else {
            fs.writeFile('./dist/team.html', generatePage.generatePage(objects), err => {
                if (err) {
                    reject(err);
                    return;
                };
            });
        }
    })
};

// function to initialize program
function init() {
    inquirer.prompt([
        {
            type: "text",
            name: "name",
            message: `What is your manager's name?`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name');
                    return false;
                }
            }
        },
        {
            type: "text",
            name: "id",
            message: "What is your manager's id?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter an ID');
                    return false;
                }
            }
        },
        {
            type: "text",
            name: "email",
            message: "What is your manager's e-mail address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an e-mail address');
                    return false;
                }
            }
        },
        {
            type: "text",
            name: "office",
            message: "What is your manager's office number?",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('Please enter an office number');
                    return false;
                }
            }
        }   
    ])
    .then(answers => {
        var manager = new Manager(answers.name);
        manager.id = answers.id;
        manager.email = answers.email;
        manager.office = answers.office;
        objects.push(manager)
        promptUser();
    })
};

// function call to initialize program
init();