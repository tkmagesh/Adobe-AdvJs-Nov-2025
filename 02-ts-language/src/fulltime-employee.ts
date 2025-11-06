import { Employee } from "./employee";

export class FulltimeEmployee extends Employee {
    healthcare : string = ""

    constructor(id : number, name : string, salary : number, healthcare : string){
        super(id, name, salary)       
        this.healthcare = healthcare;
    }

    format(): string {
        return `{"id" : ${this.id}, "name" :"${this.name}", "salary" : ${this.salary}, "healthcare" : "${this.healthcare}"}`
    }
}

let fteLikeObj : {
    id : number,
    name : string,
    salary : number,
    healthcare : string
} = {
    id : 500,
    name : "Ramesh",
    salary : 30000,
    healthcare : "family covered"
}

console.log(FulltimeEmployee.prototype.format.call(fteLikeObj))

let nonFteLikeObj : {
    id : string,
    cost : number,
    units : number
} = {
    id : "P101",
    cost : 10,
    units : 20
}

console.log(FulltimeEmployee.prototype.format.call(nonFteLikeObj))