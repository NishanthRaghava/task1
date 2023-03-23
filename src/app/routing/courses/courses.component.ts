import { CoursesService } from './../services/course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

constructor(private courseService: CoursesService){}

courses = [];

ngOnInit() {
  this.courses = this.courseService.courses;
}

}
