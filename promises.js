function promiseBody(resolve, reject) {
    setTimeout(() => {
        resolve("Medician received after 5 seconds");
    }, 5000);
}

function medician1get() {
    var answer = new Promise(promiseBody);
    return answer;
}

function printThing() {
    console.log("Medician 1 received");
}

var medicianPromise = medician1get();
console.log(medicianPromise);  // Logs a pending Promise initially

medicianPromise.then(printThing);  // Will log after 5 seconds




/**
 *

START
↓
Define functions
↓
Call medician1get → Creates promise with 5s timer
↓
Log Promise (pending)
↓
Attach .then(printThing)
↓
...wait 5 seconds...
↓
Promise resolves
↓
printThing() runs → Logs "Medician 1 received"
END

 */

