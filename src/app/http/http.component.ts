import { NgForm } from '@angular/forms';
import { profileservice } from './service/profile.service';
import { profile } from './model/model';
// import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
// import { map } from 'rxjs/operators';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})

export class HttpComponent implements OnInit {
  allprofiles: profile[] = [];
  editMode: boolean = false;
  currentprofileId: string;
  // for this form we have to assign a form that created in template view so use viewchild decorator
  @ViewChild('createProfile') form:NgForm;
  
 
  constructor(private profileService: profileservice){

  }
  
  ngOnInit(){
    this.fetchprofile();
  }
  onClick(){
    this.fetchprofile();
  }
  
  //create profile in db
  // onSubmit(profiles: {pname: string,pdob: string, pskills:string}){
  //   console.log(profiles);
  //   this.http.post<{name: string}>('https://http-ec890-default-rtdb.firebaseio.com/profiles.json', profiles)
  //   .subscribe((res)=>{
  //     console.log(res);
  //   })   
  // } here the service class is used to send http request 
 
  onSubmit(profiles: {pname: string,pdob: string, pskills:string}){
    if(!this.editMode)
      this.profileService.createprofile(profiles);
    else
      this.profileService.updateprofile(this.currentprofileId,profiles)
      this.form.reset(); // to reset data after updating the data
  }

  // fetch profile in db
  // private fetchprofile(){
  //   this.http.get<{[key: string]: profile}>('https://http-ec890-default-rtdb.firebaseio.com/profiles.json')
  //   .pipe(map((res)=>{
  //     const profiles = [];
  //     for(const key in res){
  //       if(res.hasOwnProperty(key)){
  //         profiles.push({...res[key], id:key})
  //       }
  //     }
  //     return profiles;
  //   }))
  //   .subscribe((res)=>{  //res is  profiles
  //     console.log(res);
  //     this.allprofiles=res;
  //   })
  // }

  private fetchprofile(){
    this.profileService.fetchprofile().subscribe((res)=>{
      this.allprofiles = res;
    })
  }

  // onDelete(id: string){
  //   this.http.delete('https://http-ec890-default-rtdb.firebaseio.com/profiles/'+id+'.json')
  //   .subscribe();
  // }

  onDelete(id: string){
    this.profileService.deleteprofile(id)
  }

  onEdit(id: string){

    this.currentprofileId = id;

    // get the profile based on id
    let currentProfile = this.allprofiles.find((p)=> {return p.id === id})
    console.log(currentProfile);

    // populate the form with rofile details
    //here i am setting a values for the form and when ever the edit is clicked the below values will display on the form
    this.form.setValue({
      pdob: currentProfile.pdob,
      pname: currentProfile.pname,
      pskills: currentProfile.pskills
    })
    // change the button value to update profile.
    this.editMode = true;

  }
}
