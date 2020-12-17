const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('Jamie');

    expect(employee.name).toEqual('Jamie');
});

test("gets employee's name", () => {
    const employee = new Employee('Jamie');

    expect(employee.getName()).toEqual('Jamie');
});

test("gets employee's ID", () => {
    const employee = new Employee('Jamie');
    employee.id = 1337

    expect(employee.getId()).toEqual(1337);
});

test("gets employee's email address", () => {
    const employee = new Employee('Jamie');
    employee.email = "frodo.baggins@gmail.com";

    expect(employee.getEmail()).toEqual('frodo.baggins@gmail.com');
});

test("gets employee's role", () => {
    const employee = new Employee('Jamie');

    expect(employee.getRole()).toEqual('Employee');
});