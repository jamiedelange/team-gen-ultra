const inquirer = require('inquirer');
const generatePage = require('./dist/team.html');

class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        inquirer
            .prompt({
                type: "text",
                name: "name",
                message: "What is the name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a name');
                        return false;
                    }
                }
            });
            
    }

    getId() {
        inquirer
        .prompt({
            type: "text",
            name: "id",
            message: "What is the id?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter an ID');
                    return false;
                }
            }
        });
    }

    getEmail() {
        inquirer
        .prompt({
            type: "text",
            name: "email",
            message: "What is their e-mail address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an e-mail address');
                    return false;
                }
            }
        });
    }

    getRole() {
        return Employee;
    }
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        writeToFile('team.html', generatePage(answers));
    });
};

// function call to initialize program
init();

module.exports = Employee;