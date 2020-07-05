import { Component, OnInit } from '@angular/core';
import { HomeMover } from 'src/DBLayer/ServiceLayer/HomeMover.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FacadeCommonService } from 'src/DBLayer/Shared/facade-common.service';
import { Router } from '@angular/router';
//import { map } from 'rxjs/operator';

@Component({
  selector: 'app-home-mover-panel',
  templateUrl: './home-mover-panel.component.html',
  styleUrls: ['./home-mover-panel.component.css']
})
export class HomeMoverPanelComponent implements OnInit {

  constructor( private router:Router,private userService:HomeMover,private _facadecommon:FacadeCommonService) { }

  Homeusers:any=[];
  selctedname:any;
  
  title:any;

  // sample:any[]=[{id:101,name:'John',city:'Bengaluru'},
  // {id:102,name:'Veronica',city:'Newyork'},
  // {id:103,name:'Fredric',city:'Mumbai'}]

  ngOnInit(): void 
  {
   
    
        
    this._facadecommon.getHomeMovers().subscribe((data)=>{
      this.Homeusers=data;
    })

        //---
        this.title= this._facadecommon.getitleHeader('HH');

      
    
  }



  //users:string[]=["JOHN","PETER","VERNICA"];

   //users:any[];
   //[
  //   {id:101,name:'John',city:'Bengaluru'},
  //   {id:102,name:'Veronica',city:'Newyork'},
  //   {id:103,name:'Fredric',city:'Mumbai'}
  // ]

  
  public highlightrow(Hu:any){
    //console.log(Hu.username);
    this.selctedname=Hu.username;
  }
  
  public selectRow(Hu:any){
      console.log(Hu.id)+'see';
      this.router.navigate(['/HomeDetails/'+Hu.id]);
      //['/HomeDetails',Hu.id]
  }

}
