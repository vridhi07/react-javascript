// Compose and Pipe

// Function piping and composition are concepts from functional programming that of course are possible in JavaScript -as
// it's a multi-paradigm programming language-, let's deep into this concepts quickly.
//The concept is to execute more than a single function, in a given order and pass the result of a function to the next one.

// composition and piping are almost the same, the only difference being the execution order;
// If the functions are executed from left to right,
//     it's a pipe, on the other hand, if the functions are executed from right to left it's called compose.

const addFive = (num) => {
  return num + 5;
};

const subtractTwo = (num) => {
  return num - 2;
};

const multiplyFour = (num) => {
  return num * 4;
};

// Compose Implementation
function compose(...fns) {
  return function (init) {
    // let result = init;
    // for (let i = fns.length - 1; i >= 0; i--) {
    //   result = fns[i](result);
    // }

    // return result;

    return fns.reduceRight((acc, curr) => {
      return curr(acc);
    }, init);
  };
}

const evaluate = compose(addFive, subtractTwo, multiplyFour);
console.log(evaluate(5)); // 23

// Pipe Implementation
function pipe(...fns) {
  return function (init) {
    // let result = init;
    // for (let i = fns.length - 1; i >= 0; i--) {
    //   result = fns[i](result);
    // }

    // return result;

    return fns.reduce((acc, curr) => {
      return curr(acc);
    }, init);
  };
}

const evaluatePipe = pipe(addFive, subtractTwo, multiplyFour);
console.log(evaluatePipe(5)); // 32
