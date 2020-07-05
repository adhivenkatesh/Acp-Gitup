import { Injectable, Injector } from '@angular/core';
import { TitleheaderService } from '../ServiceLayer/titleheader.service';
import { HomeMover } from '../ServiceLayer/HomeMover.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacadeCommonService {

  //private _HomeMover :HomeMover;

  private _titleheaderservice   //:TitleheaderService;
  
  //-SingleTon
  // public  get titleheaderservice():TitleheaderService{
  //   if(!this._titleheaderservice)
  //   {
  //     this._titleheaderservice=this.injector.get(TitleheaderService);
  //   }

  //   console.log("injector "+this._titleheaderservice);
    
  //   return this._titleheaderservice;
  // }

      // public get getHomeMover():HomeMover{
      //   if(!this._HomeMover)
      //   {
      //     this._HomeMover=this.injector.get(HomeMover);
      //   }

      //   return this._HomeMover;
      // }

  //constructor(private injector:Injector,private http:HttpClient) { }
  constructor(private http:HttpClient) { }

  //---
  
 
  public getHomeMovers(){
    
          return this.http.get('https://jsonplaceholder.typicode.com/users');
      }
    
      getHomeDetails(id:number){
        return this.http.get('https://jsonplaceholder.typicode.com/users/'+id);
      }

      getPanelDetails(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
      }
    
      getloginProcess(l):number{
          if (l=='abc@bbc.com')
            return 1
          else
          return 0
      }

  //--
  
  getitleHeader(FormType:string){
    
    if (FormType=='HD')
      this._titleheaderservice='HOME-MOVER-DETAILS';
    else if (FormType=='HH')
      this._titleheaderservice='HOME-MOVER-MAIN PANEL';
    else if (FormType=='PV')
    this._titleheaderservice='PROVIDER-CAMERA-PANEL-DETAILS';
    else if (FormType=='AD')
    this._titleheaderservice='MOBILE-CAMERA-PANEL-APPLICAITON';
    return this._titleheaderservice;
  }

}

