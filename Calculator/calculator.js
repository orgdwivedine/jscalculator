const operations = require('./Operation/operations.js');
const readline = require('readline');

rl.question('Enter the first number: ', (x) => {
    rl.question('Enter the second number: ', (y) => {
      rl.question(`
  Please operations the following options:
  
  [1] add (+)
  [2] Subtract (-)
  [3] Multiply (*)
  [4] Divide (/)
  
  Enter your choice: `, (choice) => {
        if (!operations.validateNumbers(x, y)) {
          console.log('Please provide valid input');
        } else {
          switch (choice) {
            case '1':
              console.log(`The sum of ${x} and ${y} is ${operations.add(x, y)}.`);
              break;
            case '2':
              console.log(`The difference of ${x} and ${y} is ${operations.subtract(x, y)}.`);
              break;
            case '3':
              console.log(`The product of ${x} and ${y} is ${operations.multiply(x, y)}.`);
              break;
            case '4':
              console.log(`The quotient of ${x} and ${y} is ${operations.divide(x, y)}.`);
              break;
            default:
              console.log('Please select valid operation (1 - 4');
              break;
          }
        }
        rl.close();
      });
    });
  });