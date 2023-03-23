import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl ,FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  reactiveForm ?: FormGroup;
  formstatus;
  
  ngOnInit(){
    this.reactiveForm = new FormGroup({
      personalDetails : new FormGroup({
        firstName: new FormControl(null,[Validators.required, this.noSpaceAllowed]),
        lastName: new FormControl(null,Validators.required),
        email: new FormControl(null,[Validators.required,Validators.email],this.emailNotAllowed),
      }),
      comment: new FormControl(null),
      country: new FormControl('India'),
      gender: new FormControl('male'),
      hobbies: new FormControl(null),
      skills: new FormArray([
        new FormControl(null),
        new FormControl(null),
        new FormControl(null),
      ])
    });

    // this.reactiveForm.get('personalDetails.firstName').valueChanges.subscribe((value) => {
    //   console.log(value)
    // })
    // this.reactiveForm.valueChanges.subscribe((value) => {
    //   console.log(value)
    // })
    this.reactiveForm.statusChanges.subscribe((value)=> {
      console.log(value);
      // this.formstatus=value;  
    })
    // setTimeout(()=>{
    //   this.reactiveForm.setValue({
    //     personalDetails:{
    //       firstName:'nishanth',
    //       lastName:'',
    //       email:'',
    //     },
    //     comment: '',
    //     country: '',
    //     gender: '',
    //     hobbies: '',
    //     skills: [0]
    //   })
    // },4000)

    // setTimeout(()=>{
    //   this.reactiveForm.patchValue({
    //     personalDetails:{
    //       firstName:'nishanth',
    //     }
    //   })
    // },4000)

  }
  onSubmit(){
    console.log(this.reactiveForm);
    this.reactiveForm.reset();
  }

  noSpaceAllowed(control:FormControl ){
    if(control.value != null && control.value.indexOf(' ') != -1){
      return {noSpaceAllowed: true}
    }
    return null;
  }

  emailNotAllowed(control: FormControl): Promise<any> | Observable<any>{
    const response = new Promise((resolve) =>{
      setTimeout(()=>{
        if(control.value === 'abc@gmail.com'){
          resolve({emailNotAllowed: true})
        }
        else{
          resolve(null)
        }
      },5000)
    });
    return response;
  }

}
