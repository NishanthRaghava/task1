import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './students.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
  providers: [StudentService]
})
export class PipesComponent implements OnInit {

  students: Student[];
  totalMarks: number;
  // filterText: string='';
  _filterText: string='';
  filteredStudents: Student[];
  totalStudends = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(this.filteredStudents.length)
    }, 2000)
  })

  get filterText(){
    return this._filterText;
  }

  set filterText(value: string){
    this._filterText = value;
    this.filteredStudents=this.filterStudentByGender(value);
  }

  // dummystd=[ {name:'venu', course:'Angular', marks:520, DOB: new Date('10-12-1999'), gender: 'male'}]
   constructor(private studentservice: StudentService){}
   
   ngOnInit(): void {
    this.students = this.studentservice.students;
    this.totalMarks = this.studentservice.totalMarks;
    this.filteredStudents = this.students;
   }

   AddDummyStudent(){
    // this.students.push({name:'kiran', course:'Angular', marks:120, DOB: new Date('08-12-1999'), gender: 'male'});
    // when the click event is triggered it does not ork because its not taking the values directly so here i m takng a
    // reference and assigning that array to a referenec and assigning to the students array
    let studentCopy = Object.assign([], this.students)
    studentCopy.push({name:'kiran', course:'Angular', marks:120, DOB: new Date('08-12-1999'), gender: 'male'});
    this.students = studentCopy;
    this.filteredStudents = this.filterStudentByGender(this._filterText);
   }
   changeGender(){
    let genderCopy = Object.assign([], this.students)
    genderCopy[0].gender = 'Female';
    this.students = genderCopy;
    this.filteredStudents = this.filterStudentByGender(this._filterText);
   }

   filterStudentByGender(filterTerm: string){
    if(this.students.length === 0 || this.filterText === ''){
      return this.students;
  }    
  else{
      return this.students.filter((student)=>
      {
          return student.gender.toLowerCase() === filterTerm.toLowerCase();
      });
   }
}
}
