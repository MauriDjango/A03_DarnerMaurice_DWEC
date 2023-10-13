// Exercise 1
function recursive(n) {
    let message = "bauuuba";
    let result = '';
    for (let i = 0; i < n; i++) {
        result += message + ' ';
    }
    return result;
}
document.getElementById("exercise1Result").textContent = recursive(5);

// Exercise 2
const rollResults = {
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
};

function countThrows(rollResult) {
    rollResults[rollResult]++;
}

function rollDice() {
    return Math.round((Math.random() * 10) + 2);
}

for (let i = 0; i < 10; i++) {
    countThrows(rollDice());
    console.log(rollResults)
    console.log(JSON.stringify(rollResults))
    document.getElementById("exercise2Result").textContent = JSON.stringify(rollResults);
}

// Exercise 3
class NewList {
    array;

    constructor() {
        this.array = [];
    }

    concat(biArray) {
        biArray.forEach(simpleArray => {
            simpleArray.forEach(item => this.array.push(item))
        })
    }

    sort() {
        for (let i = 0; i < this.array.length; i++) {
            for (let j = 0; j < this.array.length; j++) {
                if (this.array[j] > this.array[j + 1]) {
                    let valueHolder = this.array[j]
                    this.array[j] = this.array[j + 1]
                    this.array[j + 1] = valueHolder
                }
            }
        }
    }
}

let biArray = [[5, 4, 6], [2, 9, 3], [8, 1, 7]]
let newList = new NewList()

newList.concat(biArray);
newList.sort();
document.getElementById("exercise3Result").textContent = newList.array.join(', ');

// Exercise 4
class Person {
    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    getInfo() {
        return `
        Name: ${this.name}
        Age: ${this.age}
        Gender: ${this.gender}`;
    }
}

class Student extends Person {
    constructor(name, age, gender, course, group) {
        super(name, age, gender);
        this.course = course
        this.group = group
    }

    enrolled(course) {
        this.course = course
    }
}

class Professor extends Person {
    constructor(name, age, gender, subject, level) {
        super(name, age, gender);
        this.subject = subject
        this.level = level
    }

    teach(subject, level) {
        this.subject = subject
        this.level = level
    }
}

let person = new Person("Keanu", 54, "M");
let student = new Student("Maurice", 30, "M", "DAW2", "A");
let professor = new Professor("Manuel", 78, "M", "DWEC", 2);
student.enrolled("DAM2");
professor.teach("DAM", 2);

const exercise4Result = `
Person:
${person.getInfo()}

Student:
${student.getInfo()}
Course: ${student.course}
Group: ${student.group}

Professor:
${professor.getInfo()}
Subject: ${professor.subject}
Level: ${professor.level}`;
document.getElementById("exercise4Result").textContent = exercise4Result;

// Exercise 6
const Ghost = {
    colors: [],

    getRandomColor: function () {
        if (this.colors.length === 0) {
            this.colors = this.shuffle(this.generateColors());
        }

        return this.colors.pop();
    },

    generateColors: function () {
        const colors = [
            'red', 'blue', 'green', 'yellow', 'orange',
            'purple', 'pink', 'brown', 'teal', 'gray'
        ];

        return this.shuffle(colors);
    },

    shuffle: function (array) {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }
};

let exercise6Result = '';
for (let i = 0; i < 1000; i++) {
    const color = Ghost.getRandomColor();
    exercise6Result += `Color ${i + 1}: ${color}<br>`;
}
document.getElementById("exercise6Result").innerHTML = exercise6Result;

// Exercise 7
class CaesarCipher {
    constructor(shift) {
        this.shift = shift % 26;
    }

    encode(text) {
        return this.transform(text, this.shift);
    }

    decode(text) {
        return this.transform(text, -this.shift);
    }

    transform(text, shift) {
        const uppercaseText = text.toUpperCase();
        let result = '';

        for (let i = 0; i < uppercaseText.length; i++) {
            const char = uppercaseText[i];
            if (char >= 'A' && char <= 'Z') {
                let code = char.charCodeAt(0) - 'A'.charCodeAt(0);
                code = (code + shift + 26) % 26;
                result += String.fromCharCode(code + 'A'.charCodeAt(0));
            } else {
                result += char;
            }
        }

        return result;
    }
}

const cipher = new CaesarCipher(3);
const originalText = 'Hello, World!';
const encodedText = cipher.encode(originalText);
const decodedText = cipher.decode(encodedText);

const exercise7Result = `
Original Text: ${originalText}
Encoded Text: ${encodedText}
Decoded Text: ${decodedText}`;
document.getElementById("exercise7Result").textContent = exercise7Result;

// Exercise 8
class Wallet {
    constructor(name, bills5, bills10, bills20) {
        this.name = name;
        this.bills5 = bills5;
        this.bills10 = bills10;
        this.bills20 = bills20;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getBills5() {
        return this.bills5;
    }

    setBills5(bills5) {
        this.bills5 = bills5;
    }

    getBills10() {
        return this.bills10;
    }

    setBills10(bills10) {
        this.bills10 = bills10;
    }

    getBills20() {
        return this.bills20;
    }

    setBills20(bills20) {
        this.bills20 = bills20;
    }

    calculateTotal() {
        return this.bills5 * 5 + this.bills10 * 10 + this.bills20 * 20;
    }

    static selectWalletWithMostMoney(wallets) {
        let maxMoney = -1;
        let selectedWallet = null;
        let equalAmount = true;

        wallets.forEach((wallet) => {
            const money = wallet.calculateTotal();
            if (money > maxMoney) {
                maxMoney = money;
                selectedWallet = wallet;
                equalAmount = false;
            } else if (money === maxMoney) {
                equalAmount = true;
            }
        });

        return equalAmount ? 'Anyone' : selectedWallet.getName();
    }
}

const wallet1 = new Wallet('Friend1', 2, 3, 1);
const wallet2 = new Wallet('Friend2', 3, 2, 2);
const wallet3 = new Wallet('Friend3', 1, 4, 1);

const wallets = [wallet1, wallet2, wallet3];
const exercise8Result = `Wallet with the most money: ${Wallet.selectWalletWithMostMoney(wallets)}`;
document.getElementById("exercise8Result").textContent = exercise8Result;

// Exercise 9
function calculateArithmeticExpression(expression) {
    try {
        const result = eval(expression);

        if (!isNaN(result)) {
            return result;
        } else {
            return "Invalid expression";
        }
    } catch (error) {
        return "Error evaluating expression";
    }
}

const expression1Result = calculateArithmeticExpression("2*5-3");
const expression2Result = calculateArithmeticExpression("(7*7*7)+(3-1)*8");
const expression3Result = calculateArithmeticExpression("4-2");

const exercise9Result = `
Result 1: ${expression1Result}
Result 2: ${expression2Result}
Result 3: ${expression3Result}`;
document.getElementById("exercise9Result").textContent = exercise9Result;
