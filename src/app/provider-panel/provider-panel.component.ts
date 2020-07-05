import { Component, OnInit } from '@angular/core';
import { FacadeCommonService } from 'src/DBLayer/Shared/facade-common.service';

@Component({
  selector: 'app-provider-panel',
  templateUrl: './provider-panel.component.html',
  styleUrls: ['./provider-panel.component.css']
})
export class ProviderPanelComponent implements OnInit {

  title:any;
  PanelUsers:any;
  constructor(private _facadecommon:FacadeCommonService)  { }


  ngOnInit(): void {

    this.title=this._facadecommon.getitleHeader('PV');

    this._facadecommon.getPanelDetails().subscribe((data)=>{
      this.PanelUsers=data;
    })

  }

}
