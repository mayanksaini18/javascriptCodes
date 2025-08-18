
// setTimeout(function, delay)

// Runs the function once after the given delay (in milliseconds).

setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);


// clearTimeout(id) → cancels it.

let timeoutId = setTimeout(() => {
  console.log("You won't see this!");
}, 3000);

clearTimeout(timeoutId); // cancels before execution

// 2. setInterval(function, delay)

// Runs the function repeatedly every given delay (in milliseconds).

let count = 0;
let intervalId = setInterval(() => {
  count++;
  console.log("Repeats every 1 second:", count);
  
  if (count === 5) {
    clearInterval(intervalId); // stop after 5 times
  }
}, 1000);


// clearInterval(id) → stops it.