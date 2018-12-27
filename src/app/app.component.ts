import { Component } from '@angular/core';
import {HttpClient } from '@angular/common/http'
// import { url } from 'inspector';
// import { markDirty } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'images-upload';
  name:string='';
  age:number;
  name1:string;
  found:boolean;
  url:string=`../assets/json/config.json`;
  // json:boolean;
  // json:boolean;
  constructor(private http:HttpClient){
    
  }
  onNameKeyUp(event:any){
    this.name=event.target.value;
    console.log(event.target.value);      
    this.found=true;
  }
//   onNameKeyUp(event:any){
//     this.name=event.target.value;
//     console.log(event.target.value);      
//     this.found=true;
//   }
  getProfile(){
    this.http.get(this.url)
    .subscribe(
      (data:any []) => {
        console.log(data);
        console.log("consol"); 
        if(data.length){
          console.log("the Data");  
               this.name=data[1].name;              
          // this.age= data[0].age;
        }
      }
    )  
   
  }


  postProfile(){
    this.http.post("https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/",    
    {
      name:'Thrinadh',  
      address:'hyderbed'
    }, 
    )    
      .subscribe(
      (data:any []) => {
        console.log(data);     
      }
    )   
  }    
}
