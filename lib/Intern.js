const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name = '') {
        super(name);

        this.school
    }

    getSchool() {
        inquirer
            .prompt({
                type: "text",
                name: "school",
                message: "Where did/does your intern go to school?"
            })
    }

    getRole() {
        return Intern;
    }
}