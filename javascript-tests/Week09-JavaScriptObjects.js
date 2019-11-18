var person = {
    firstName: 'John',
    lastName: 'Smith',
    fullName: 'John Smith'
}
console.log(person)

var calculator = {
    operand01: 4,
    operand02: 5,
};

calculator.operand01 = person.firstName.length;
calculator.operand02 = person.lastName.length;
calculator.add = add(operand01, operand02);
calculator.subtract = subtract(operand01, operand02);
calculator.multiply = multiply(operand01, operand02);

console.log(calculator)

