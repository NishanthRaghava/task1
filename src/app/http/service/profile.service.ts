import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { profile } from '../model/model';

@Injectable({providedIn:'root'})
export class profileservice{
    constructor(private http: HttpClient){
        
    }
    //create a profile in database
    createprofile(profiles: {pname: string,pdob: string, pskills:string}){
        console.log(profiles);
        this.http.post<{name: string}>('https://http-ec890-default-rtdb.firebaseio.com/profiles.json', profiles)
        .subscribe((res)=>{
          console.log(res);
        })
    }
    // fetch a profile in database
    fetchprofile(){
        return this.http.get<{[key: string]: profile}>('https://http-ec890-default-rtdb.firebaseio.com/profiles.json')
        .pipe(map((res)=>{
          const profiles = [];
          for(const key in res){
            if(res.hasOwnProperty(key)){
              profiles.push({...res[key], id:key})
            }
          }
          return profiles;
        }))
    }
    // delte a profil in database
    deleteprofile(id: string){
        return this.http.delete('https://http-ec890-default-rtdb.firebaseio.com/profiles/'+id+'.json')
        .subscribe();
    }

    // update a profile in database
    updateprofile(id: string, value: profile){
        this.http.put('https://http-ec890-default-rtdb.firebaseio.com/profiles/'+id+'.json',value).subscribe();
    }
}