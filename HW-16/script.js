const persons = [];
let inputData = prompt('123, aleksey, tarasov, 28');


function findPerson(id) {
    return persons.find(person => person.id === id);
}

let duplicateDetected = false;

while (inputData && !duplicateDetected) {
    const data = inputData.split(',');
    const id = data[0];
    const firstName = data[1];
    const lastName = data[2];
    const age = data[3];


    if (findPerson(id)) {
        console.log(`Error: Person with ID ${id} already exists.`);
        duplicateDetected = true;
    } else {
        const person = new Person(id, firstName, lastName, age);
        persons.push(person);
    }

    if (!duplicateDetected) {
        inputData = prompt('111, anton, petrov, 45');
    }
}

console.log(persons);

function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

console.log('=================================');

const numbers = [28,45];
res = numbers.reduce((accum, item) => accum + item);
// console.log(res);
res = persons.reduce((accum, p) => accum + p.age,0);
console.log(res);
console.log('==================================');

let people = [
    { name: 'Alex', age: 25 },
    { name: 'Mihael', age: 30 },
    { name: 'Rada', age: 20 },
    { name: 'David', age: 35 }
];

let ageStats = people.reduce((acc, person) => {
    acc.sum += person.age;
    acc.max = Math.max(acc.max, person.age);
    acc.min = Math.min(acc.min, person.age);
    return acc;
}, { sum: 0, max: -Infinity, min: Infinity });

ageStats.average = ageStats.sum / people.length;

let outputDiv = document.getElementById('output');
outputDiv.innerHTML = `
    <p>Sum of ages: ${ageStats.sum}</p>
    <p>Maximum age: ${ageStats.max}</p>
    <p>Minimum age: ${ageStats.min}</p>
    <p>Average age: ${ageStats.average}</p>
`;