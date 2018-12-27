import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UploadImagesService {

  // title = 'images-upload';
  name:string='';
  age:number;
  found:boolean;
  json:boolean;
  // json:boolean;

  constructor(private http:HttpClient ){}
  onNameKeyUp(event:any){
    this.name=event.target.value;
    console.log(event.target.value);      
    this.found=true;
  }
  getProfile(){
    this.http.get(`http://jsonplaceholder.typicode.com/users`)
    .subscribe(
      (data:any []) => {
        console.log(data);
        if(data.length){
          this.age= data[0].age;
          this.found=false;       
        }
      }
    )    
    // console.log(this.name);
  }
  postProfile(){
    this.http.post("https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/?name=${this.name}  ",    
  {
      name:'mark',
      age:42,
      address:'hyderbed',
      id:'12588',      
    }, 
    
    )    
      .subscribe(
      (data:any []) => {
        this.json=true
        console.log(data);     
      }
    )    
    // console.log(this.name);
  }

  
}
