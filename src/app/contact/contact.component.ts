import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  contact:any;

  ngOnInit(): void {
    this.contact='ABC-BBC,12344/55,SYLVANIA,BEAUTY-ARCTEM,ZIP-10000006'
  }

}
