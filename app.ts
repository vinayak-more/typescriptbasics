import {StudentInfo} from './StudentInfo';
import {Student} from './Student';
//default import statement
import StudentShorthand from './StudentShorthand'

console.log("Hello TypeScript World");

let a =10;
let b: number = 20;

var c = 30;
enum LanguagesKnows{English, Hindi, Marathi}

var student={
    Name:"Vinayak",
    Age:25,
    Address:"Mumbai",
    Language: LanguagesKnows[LanguagesKnows.Marathi]
};

var studentArray = [
    {Name:"Vishal" , Age: 22,Language: LanguagesKnows[LanguagesKnows.English]},
    {Name : "Vijay" , Age: 30,Language: LanguagesKnows[LanguagesKnows.Hindi]}
];

studentArray.push(student);

for(var index =0; index<studentArray.length;index++){
    var element = studentArray[index];
    console.log(element);
    let a :number =30;
}

var value :number = 10;
console.log(value);
for(let index = 0 ; index<10; index++){
    let value : number = index;
    console.log(value);
}


function printStudents(students:any[]){
    students.forEach(element =>{
        console.log(element);
    });
}

function printNumbers(...num:number[]){
    num.forEach(element=>{
        console.log(element);
    });
}

function printMessage(message:string = "Hello TypeScript"){
    console.log(message);
}

printStudents(studentArray);
printNumbers(1,2,3,4,5,6,7);
printMessage();
printMessage("Hello my TypeScript");

//###### Functions advanced#####//

//@@@@ Anonymous functions @@@@//
let getStudentName = function (lastName:string, firstName:string){
    return firstName + " ... " +lastName;
}

console.log(getStudentName("More","Vinayak"));

//@@@@ Lambda Or Arrow Function

let getStudentNameArrow = (lastName:string, firstName:string)=>{return firstName +" <=> "+lastName};

console.log(getStudentNameArrow("Dhoni","M.S."));

//####### interfaces ####//

let studentInfo:StudentInfo={
    Name:"Vinayak",
    Age:25,
    Language: LanguagesKnows[LanguagesKnows.Marathi]
};

let studentInfoArray:StudentInfo[] = [
    {Name:"Vishal" , Age: 22,Language: LanguagesKnows[LanguagesKnows.English]},
    {Name : "Vijay" , Age: 30,Language: LanguagesKnows[LanguagesKnows.Hindi]}
];

function printStudentInfos(students:StudentInfo[]){
    students.forEach(element =>{
        console.log(element);
    });
}

printStudentInfos(studentInfoArray);


//##### classes example #####//



let s = new Student("Vinayak", "More");
console.log(s.getFullName());

//@@@ class with shorthand constructor @@@//

let ss = new StudentShorthand("Neil","Armstrong");
console.log(ss.getFullName());

//####### Generics ############//

var studentArrayGeneric:Array<StudentInfo> = [
    {Name:"Vishal" , Age: 22,Language: LanguagesKnows[LanguagesKnows.English]},
    {Name : "Vijay" , Age: 30,Language: LanguagesKnows[LanguagesKnows.Hindi]}
];
printStudentInfos(studentArrayGeneric);

function printStudentInfosGenerics(students:Array<StudentInfo>){
    students.forEach(element =>{
        console.log(element);
    });
}

printStudentInfosGenerics(studentArrayGeneric);