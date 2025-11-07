const EventEmitter = require("node:events");
const fs = require("node:fs");

const stream = fs.createReadStream("./calculator.dat", { encoding: "utf8", highWaterMark : 30  });
let dataString = ""

stream.on("data", function (chunk) {
  dataString += chunk
  let validChunk = dataString.substring(0, dataString.lastIndexOf('\n'))
  let lines = validChunk.split('\n')
  for (let line of lines){
     let [operation, x, y] = line.split(',')
     let n1 = parseInt(x),
        n2 = parseInt(y);
        
    switch (operation) {
      case "add":
        console.log('add result ', n1 + n2);
        break;

      case "subtract":
        console.log('subtract result ', n1 + n2);
        break;

      case "multiply":
        console.log('multiply result ', n1 + n2);
        break;

    case "divide":
        console.log('divide result ', n1 + n2);
        break;
      default:
        break;
    }

    
  }
  dataString = dataString.substr(dataString.lastIndexOf('\n') + 1)
});
stream.on("end", function () {
});
stream.on("error", function (err) {
});