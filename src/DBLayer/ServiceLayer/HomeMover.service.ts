import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http';


import { stringify } from 'querystring';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Observable, Subject, observable } from 'rxjs';
import { map,catchError} from "rxjs/operators"; 




@Injectable({
  providedIn: 'root'
})
//@Injectable()
export class HomeMover {



   //users:any[];
  //   =[{id:101,name:'John'},
  // {id:102,name:'Veronica'},
  // {id:103,name:'Fredric'}]

  
  constructor( private http:HttpClient){ }

  
  public getHomeMovers(){
    
//     return   [
//     {id:101,name:'John',email:'abc@bbc.com'},
//     {id:102,name:'Veronica',email:'Newyork@cc.com'},
//     {id:103,name:'Fredric',email:'Mumbai@mmc.com'},
//     {id:104,name:'Fredric',email:'Mumbai@mmc.com'},
//     {id:105,name:'Fredric',email:'Mumbai@mmc.com'},
//     {id:106,name:'Fredric',email:'Mumbai@mmc.com'},
//     {id:107,name:'Fredric',email:'Mumbai@mmc.com'}
// ]
    // return this.uploadForLoopData();

      return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getHomeDetails(id:number){
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+id);
  }
  
  getProviders(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/');
  }

}
