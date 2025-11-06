export class Employee {
    id : number = 0;
    name : string = "";
    salary : number = 0;

    constructor(id : number, name : string, salary : number){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    toJSON() : string {
        return `{"id" : ${this.id}, "name" :"${this.name}", "salary" : ${this.salary}}`
    }
}