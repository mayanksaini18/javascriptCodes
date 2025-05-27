function greet(name) {
    return "Hello, " + name;
}

function sayGoodbye(name) {
    return "Goodbye, " + name;
}

function customMessage(name, callback) {
    return callback(name);
}

console.log(customMessage("Mayank", greet));      // Hello, Mayank
console.log(customMessage("Mayank", sayGoodbye)); // Goodbye, Mayank
