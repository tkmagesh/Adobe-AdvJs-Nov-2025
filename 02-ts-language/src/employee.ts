export class Employee {
    public id : number = 0;
    public name : string = "";
    public salary : number = 0;

    private aadhaar : string = "";

    constructor(id : number, name : string, salary : number){
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.aadhaar = "875179236545";
    }

    toJSON() : string {
        return `{"id" : ${this.id}, "name" :"${this.name}", "salary" : ${this.salary}, "aadhaar" : "********${this.aadhaar.substring(9)}}`
    }
}

let e = new Employee(100, "Magesh", 10000)
console.log(e.aadhaar)