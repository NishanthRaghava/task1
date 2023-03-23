import { PipeTransform,Pipe } from '@angular/core';
import { Student } from './student';

@Pipe({
    name: 'filterStudent'
})
export class FilterPipe implements PipeTransform{
    transform(students: Student[], filterText: string) {
        console.log('filter pipe called');
        if(students.length === 0 || filterText === ''){
            return students;
        }    
        else{
            return students.filter((student)=>
            {
                return student.gender.toLowerCase() === filterText.toLowerCase();
            });
        }
    }
}
