import { Student } from "./student";

export class StudentService{
    students: Student[ ]= [
        {name:'venu', course:'Angular', marks:520, DOB: new Date('03-31-1999'), gender: 'male'},
        {name:'shruthi', course:'Angular', marks:420, DOB: new Date('03-17-2001'), gender: 'female'},
        {name:'trinadh', course:'Angular', marks:580, DOB: new Date('11-25-2000'), gender: 'male'},
        {name:'geetha', course:'Angular', marks:320, DOB: new Date('02-28-2000'), gender: 'female'}
    ];

    totalMarks: number = 600; 
}