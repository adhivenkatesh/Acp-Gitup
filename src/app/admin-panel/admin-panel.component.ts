import { Component, OnInit } from '@angular/core';
import { FacadeCommonService } from 'src/DBLayer/Shared/facade-common.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  MenuEnable:boolean;
  titleMain:any;
  constructor(private _facadecomm:FacadeCommonService) { }

  ngOnInit(): void {

    this.titleMain=this._facadecomm.getitleHeader('AD');
    this.MenuEnable=true;

  }

}
