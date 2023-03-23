import { ActivatedRoute } from '@angular/router';
import { CoursesService } from './../../services/course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  constructor (private service: CoursesService, private route: ActivatedRoute){}
    course;
    courseId: number;

    ngOnInit(){
      this.courseId = this.route.snapshot.params['id'];
      this.course = this.service.courses.find(x => x.id == this.courseId);
    }
  
}
