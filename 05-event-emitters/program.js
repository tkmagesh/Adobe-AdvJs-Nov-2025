let calculator = require('./calculator')
let CalculatorParser = require('./calculator-parser')

const parser = new CalculatorParser()

parser.on('add', (n1, n2) => {
    console.log('add result :', calculator.add(n1, n2))
})

parser.on("subtract", (n1, n2) => {
  console.log("subtract result :", calculator.subtract(n1, n2));
});

parser.on("multiply", (n1, n2) => {
  console.log("multiply result :", calculator.multiply(n1, n2));
});

parser.on("divide", (n1, n2) => {
  console.log("divide result :", calculator.divide(n1, n2));
});

console.dir(parser);

parser.Parse()