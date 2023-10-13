
/*
Ejercicio 1
Implementar una función recursiva que reciba un parámetro n y repita n veces el string “bauuuba”. Por ejemplo, si pasamos el parámetro 5, devolverá “bauuuba bauuuba bauuuba bauuuba bauuuba”
NOTA: no puedes utilizar el método String.repeat()
*/

function recursive(n) {
    let message = "bauuuba"
    console.log(message + ' ')
    recursive(n--)
}

/*
Ejercicio 2
Escribir un script que simule el lanzamiento de 2 dados:
Utiliza la función Math.random() para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados
Luego, suma el valor de los 2 dados y almacena su resultado
Ahora, haz 36.000 lanzamientos
Por último, muestra por pantalla el número de veces que ha salido cada resultado
*/

const rollResults = {
    2:0,
    3:0,
    4:0,
    5:0,
    6:0,
    7:0,
    8:0,
    9:0,
    10:0,
    11:0,
    12:0
}

function countThrows(rollResult) {
    rollResults[rollResult]++
}

function rollDice() {
    return Math.round((Math.random() * 10) + 2)
}

for (let i = 0; i < 10; i++) {
    countThrows(rollDice())
}

/*
Ejercicio 3
Dada una matriz bidimensional de enteros, transformarla de la siguiente manera utilizando funciones:
Aplánala sin utilizar el método Array.concat()
Ordénala ascendentemente sin utilizar los métodos Array.sort() y Array.flat().
Por ejemplo, si se recibe la matriz [[5, 4, 6], [2, 9, 3], [8, 1, 7]], la salida debería ser [1, 2, 3, 4, 5, 6, 7, 8, 9]
Ten en cuenta que la longitud de las dimensiones de la matriz no tienen porqué coincidir, pudiendo tener 0 elementos en
una dimensión y 4 elementos en otra.
*/

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
                if (this.array[j] > this.array[j+1]) {
                    let valueHolder = this.array[j]
                    this.array[j] = this.array[j+1]
                    this.array[j+1] = valueHolder
                }
            }
        }
    }
}

let biArray = [[5, 4, 6], [2, 9, 3], [8, 1, 7]]
let newList = new NewList()

newList.concat(biArray)
console.log(newList.array)

newList.sort()
console.log(newList.array)

/*
Ejercicio 4
Definir la siguiente jerarquía de clases, haciendo uso de las clases de JavaScript:
    Objeto Persona con las propiedades nombre, edad y su identidad de género, y el método getInfo(), que muestra por pantalla las propiedades de la persona.
    Objeto Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método matriculado(), el cual matriculará a un estudiante en un curso.
    Objeto Profesor, que hereda de Persona, e incluye las propiedades módulo y nivel y el método imparte(), el cual asigna un módulo y nivel a un profesor.
    Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía.
*/

class Person {
    constructor(name, age, sex) {
        this.name = name
        this.age = age
        this.sex = sex
    }

    getInfo() {
        return `
        Name: ${this.name}
        Age: ${this.age}
        Sex: ${this.sex}`
    }
}

class Student extends Person {
    constructor(name, age, sex, course, group) {
        super(name, age, sex);
        this.course = course
        this.group = group
    }

    enrolled(course) {
        this.course = course
    }
}

class Professor extends Person {
    constructor(name, age, sex, subject, grade) {
        super(name, age, sex);
        this.subject = subject
        this.grade = grade
    }

    teach(subject, grade) {
        this.subject = subject
        this.grade = grade
    }
}

let person = new Person("Keanu", 54, "M")
console.log(person)
let student = new Student("Maurice", 30, "M", "DAW2", "A")
console.log(student)
let professor = new Professor("Manuel", 78, "M", "DWEC", 2)
console.log(professor)

student.enrolled("DAM2")
console.log(student)

professor.teach("DAM", 2)
console.log(professor)