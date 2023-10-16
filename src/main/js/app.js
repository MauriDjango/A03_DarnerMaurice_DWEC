// Exercise 1: Repeated Message
// This function repeats a given message 'n' times.
function recursive(n) {
    let message = "bauuuba";
    let result = '';
    for (let i = 0; i < n; i++) {
        result += message + ' ';
    }
    return result;
}

// Display the result of the 'recursive' function in an HTML element.
document.getElementById("exercise1Result").textContent = recursive(5);

// Exercise 2: Dice Rolling Simulation
// This exercise simulates rolling dice, counts the occurrences of each roll, and displays the results.

// Initialize an object to store counts of dice roll results.
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

// Function to count the occurrences of a dice roll result.
function countThrows(rollResult) {
    rollResults[rollResult]++;
}

// Function to simulate a dice roll and return the result.
function rollDice() {
    return Math.round((Math.random() * 10) + 2);
}

// Simulate 10 dice rolls.
for (let i = 0; i < 10; i++) {
    // Roll the dice, update counts, and display the roll results.
    countThrows(rollDice());
    console.log(rollResults);  // Log the rollResults to the console
    document.getElementById("exercise2Result").textContent = JSON.stringify(rollResults);
}

// Exercise 3: NewList Class for Array Operations
// This exercise defines a class 'NewList' that performs operations on arrays.

// Define a class 'NewList'.
class NewList {
    array;

    // Constructor: Initializes an empty array.
    constructor() {
        this.array = [];
    }

    // Method to concatenate a two-dimensional array into 'array'.
    concat(biArray) {
        biArray.forEach(simpleArray => {
            simpleArray.forEach(item => this.array.push(item));
        });
    }

    // Method to sort 'array' in ascending order.
    sort() {
        for (let i = 0; i < this.array.length; i++) {
            for (let j = 0; j < this.array.length; j++) {
                if (this.array[j] > this.array[j + 1]) {
                    let valueHolder = this.array[j];
                    this.array[j] = this.array[j + 1];
                    this.array[j + 1] = valueHolder;
                }
            }
        }
    }
}

// Create a two-dimensional array 'biArray'.
let biArray = [[5, 4, 6], [2, 9, 3], [8, 1, 7]];

// Create an instance of 'NewList' named 'newList'.
let newList = new NewList();

// Concatenate 'biArray' into 'newList'.
newList.concat(biArray);

// Sort the elements in 'newList' in ascending order.
newList.sort();

// Display the sorted elements from 'newList' in an HTML element.
document.getElementById("exercise3Result").textContent = newList.array.join(', ');


// Exercise 4: Class Inheritance
// This exercise involves classes representing people, students, and professors.

// Define a base class 'Person' with properties and a method.
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getInfo() {
        return `
        Name: ${this.name}
        Age: ${this.age}
        Gender: ${this.gender}`;
    }
}

// Create a class 'Student' that extends 'Person' and adds 'course' and 'group'.
class Student extends Person {
    constructor(name, age, gender, course, group) {
        super(name, age, gender);
        this.course = course;
        this.group = group;
    }

    enrolled(course) {
        this.course = course;
    }
}

// Create a class 'Professor' that extends 'Person' and adds 'subject' and 'level'.
class Professor extends Person {
    constructor(name, age, gender, subject, level) {
        super(name, age, gender);
        this.subject = subject;
        this.level = level;
    }

    teach(subject, level) {
        this.subject = subject;
        this.level = level;
    }
}

// Create instances of 'Person', 'Student', and 'Professor'.
let person = new Person("Keanu", 54, "M");
let student = new Student("Maurice", 30, "M", "DAW2", "A");
let professor = new Professor("Manuel", 78, "M", "DWEC", 2);

// Enroll the student and set the subject for the professor.
student.enrolled("DAM2");
professor.teach("DAM", 2);

// Display the information for each individual.
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

// Update an HTML element with the results.
document.getElementById("exercise4Result").textContent = exercise4Result;

// Exercise 6: Random Color Generator
// This exercise generates random colors using the 'Ghost' object.

// Create an object 'Ghost' to generate random colors.
const Ghost = {
    colors: [],

    // Function to get a random color.
    getRandomColor: function () {
        if (this.colors.length === 0) {
            this.colors = this.shuffle(this.generateColors());
        }

        return this.colors.pop();
    },

    // Function to generate a list of colors.
    generateColors: function () {
        const colors = [
            'red', 'blue', 'green', 'yellow', 'orange',
            'purple', 'pink', 'brown', 'teal', 'gray'
        ];

        return this.shuffle(colors);
    },

    // Function to shuffle an array.
    shuffle: function (array) {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }
};

// Initialize a variable to store the generated results.
let exercise6Result = '';

// Generate 1000 random colors.
for (let i = 0; i < 1000; i++) {
    const color = Ghost.getRandomColor();
    exercise6Result += `Color ${i + 1}: ${color}<br>`;
}

// Update an HTML element with the results.
document.getElementById("exercise6Result").innerHTML = exercise6Result;

// Exercise 7: Caesar Cipher
// This exercise implements a Caesar cipher for encoding and decoding text.

// Create a class 'CaesarCipher' with a shift value.
class CaesarCipher {
    constructor(shift) {
        this.shift = shift % 26;
    }

    // Method to encode text.
    encode(text) {
        return this.transform(text, this.shift);
    }

    // Method to decode text.
    decode(text) {
        return this.transform(text, -this.shift);
    }

    // Helper method for encoding and decoding.
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

// Create an instance of the Caesar cipher with a shift of 3.
const cipher = new CaesarCipher(3);

// Define an original text to encode and decode.
const originalText = 'Hello, World!';

// Encode the text.
const encodedText = cipher.encode(originalText);

// Decode the encoded text.
const decodedText = cipher.decode(encodedText);

// Display the original, encoded, and decoded text.
const exercise7Result = `
Original Text: ${originalText}
Encoded Text: ${encodedText}
Decoded Text: ${decodedText}`;

// Update an HTML element with the results.
document.getElementById("exercise7Result").textContent = exercise7Result;

// Exercise 8: Wallet Class
// This exercise defines a 'Wallet' class to manage bills and calculate the total.

// Create a class 'Wallet' with properties and methods.
class Wallet {
    constructor(name, bills5, bills10, bills20) {
        this.name = name;
        this.bills5 = bills5;
        this.bills10 = bills10;
        this.bills20 = bills20;
    }

    // Getter and setter methods for 'name'.
    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    // Getter and setter methods for 'bills5'.
    getBills5() {
        return this.bills5;
    }

    setBills5(bills5) {
        this.bills5 = bills5;
    }

    // Getter and setter methods for 'bills10'.
    getBills10() {
        return this.bills10;
    }

    setBills10(bills10) {
        this.bills10 = bills10;
    }

    // Getter and setter methods for 'bills20'.
    getBills20() {
        return this.bills20;
    }

    setBills20(bills20) {
        this.bills20 = bills20;
    }

    // Method to calculate the total amount of money in the wallet.
    calculateTotal() {
        return this.bills5 * 5 + this.bills10 * 10 + this.bills20 * 20;
    }

    // Static method to select the wallet with the most money from an array of wallets.
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

// Create instances of 'Wallet'.
const wallet1 = new Wallet('Friend1', 2, 3, 1);
const wallet2 = new Wallet('Friend2', 3, 2, 2);
const wallet3 = new Wallet('Friend3', 1, 4, 1);

// Create an array of wallets.
const wallets = [wallet1, wallet2, wallet3];

// Determine the wallet with the most money using the static method.
const exercise8Result = `Wallet with the most money: ${Wallet.selectWalletWithMostMoney(wallets)}`;

// Update an HTML element with the result.
document.getElementById("exercise8Result").textContent = exercise8Result;

// Exercise 9: Arithmetic Expression Calculator
// This exercise calculates arithmetic expressions.

// Function to calculate arithmetic expressions.
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

// Define arithmetic expressions to calculate.
const expression1Result = calculateArithmeticExpression("2*5-3");
const expression2Result = calculateArithmeticExpression("(7*7*7)+(3-1)*8");
const expression3Result = calculateArithmeticExpression("4-2");

// Display the results of the arithmetic expressions.
const exercise9Result = `
Result 1: ${expression1Result}
Result 2: ${expression2Result}
Result 3: ${expression3Result}`;

// Update an HTML element with the results.
document.getElementById("exercise9Result").textContent = exercise9Result;
