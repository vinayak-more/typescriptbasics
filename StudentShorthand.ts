//default export statement: only one default export allowd per ts file
export default class StudentShorthand{
    constructor(private firstName,private lastName){}
    getFullName(){
        return this.firstName + " "+ this.lastName;
    }
}
