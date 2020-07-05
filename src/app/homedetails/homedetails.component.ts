import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { HomeMover } from 'src/DBLayer/ServiceLayer/HomeMover.service';
import { FacadeCommonService } from 'src/DBLayer/Shared/facade-common.service';
import { json } from 'Onode_modules/@angular-devkit/core/src';


@Component({
  selector: 'app-homedetails',
  templateUrl: './homedetails.component.html',
  styleUrls: ['./homedetails.component.css']
})
export class HomedetailsComponent implements OnInit {


  
  constructor(private activatedRoute:ActivatedRoute,
    private userservice:HomeMover,private _facadecommon:FacadeCommonService) { }

  title:any;
  HomeDetails:any=[];

  ngOnInit(): void {
     
    let id =this.activatedRoute.snapshot.params['id'];

    this._facadecommon.getHomeDetails(id).subscribe(ho=>{
      this.HomeDetails=ho;
      //console.log(ho);
    })

    //---
    
    this.title= this._facadecommon.getitleHeader('HD');
   


  }

}
