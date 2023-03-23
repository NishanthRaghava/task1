import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent {

  defaultCountry="select";
  defaultGender="Male";
  firstName:  string ="";

 
 
  @ViewChild('myForm') form ?: NgForm;

  

  onSubmit(){
    console.log(this.form);
  }
  setdefaultvalues(){
    this.form?.setValue({
      comment:'',
      country:'',
      gender:'',
      personalDetails:{
      email: 'nishanth@gmail.com',
      firstName: "nishanth",
      lastName: 'raghava',
      
      }
    })
  }
  gender =[
    {id:1, value:'Male'},
    {id:2, value:'Female'},
    {id:3, value:'Other'}
  ]


}

