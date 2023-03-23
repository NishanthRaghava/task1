
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormControlComponent } from './form-control/form-control.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { HttpComponent } from './http/http.component';
import {HttpClientModule } from '@angular/common/http';
import { RoutingComponent } from './routing/routing.component';
import { HomeComponent } from './routing/home/home.component';
import { AboutComponent } from './routing/about/about.component';
import { ContactComponent } from './routing/contact/contact.component'
import { ErrorComponent } from './routing/error/error.component';
import { CoursesComponent } from './routing/courses/courses.component';
import { CoursesService } from './routing/services/course.service';
import { CourseComponent } from './routing/courses/course/course.component';
import { LazyRoutingComponent } from './lazy-routing/lazy-routing.component';
import { PipesComponent } from './pipes/pipes.component';
import { PercentagePipe } from './pipes/percentage.pipe';
import { FilterPipe } from './pipes/filter.pipe';





const appRoute: Routes = [
  // {path: '',component:HomeComponent},
  // //{path:'', redirectTo:'Home', pathMatch:'full'} another way
  // {path:'Home', component:HomeComponent},
  // {path:'About', component:AboutComponent},
  // {path:'Contact', component:ContactComponent},
  // {path:'Courses', component:CoursesComponent},
  // {path: 'Courses/:id', component:CourseComponent},
  // {path:'**',component:ErrorComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    FormControlComponent,
    ReactiveFormsComponent,
    HttpComponent,
    RoutingComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ErrorComponent,
    CoursesComponent,
    CourseComponent,
    LazyRoutingComponent,
    PipesComponent,
    PercentagePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)

  ],
  providers: [CoursesService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
