const EventEmitter = require("node:events");
const fs = require("node:fs");


class CalculatorParser extends EventEmitter {
    constructor(){
        super();
    }

    Parse(){
        const stream = fs.createReadStream("./calculator.dat", { encoding: "utf8", highWaterMark : 30  });
        let dataString = "";

        stream.on("data", function (chunk) {
            dataString += chunk;
            let validChunk = dataString.substring(0, dataString.lastIndexOf('\n'));
            let lines = validChunk.split('\n');
            for (let line of lines){
                let [operation, x, y] = line.split(',');
                let n1 = parseInt(x),
                    n2 = parseInt(y);
                this.emit(operation, [n1, n2])
            }
        })
    }
}

module.exports = CalculatorParser
