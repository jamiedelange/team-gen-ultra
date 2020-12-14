const Employee = require("./Employee");
const inquirer = require("inquirer");

class Engineer extends Employee {
    constructor(name = '') {
        super(name);

        this.github = ;
    }

    getGithub() {
        inquirer
            .prompt({
                type: "text",
                name: "github",
                message: "What is your engineer's github username?"
            })
    }

    getRole() {
        return Engineer;
    }
}