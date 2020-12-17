const Intern = require("../lib/Intern");

test('creates employee object', () => {
    const intern = new Intern('Jamie');

    expect(intern.name).toEqual('Jamie');
});

test("gets employee's school", () => {
    const intern = new Intern('Jamie');
    intern.school = 'Bikes University'

    expect(intern.getSchool()).toEqual('Bikes University')
});

test("gets employee's role", () => {
    const intern = new Intern('Jamie');
    
    expect(intern.getRole()).toEqual('Intern');
});