import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators, Form, FormControl} from '@angular/forms';
import { Router } from  '@angular/router';
import { FacadeCommonService } from 'src/DBLayer/Shared/facade-common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted  =  false;
  authorisedDialogue=true;

  constructor(private router: Router,private formBuilder: FormBuilder,private _facade:FacadeCommonService) {
    
   }

  ngOnInit(): void {
    console.log('oninit');

    this.loginForm  =  this.formBuilder.group({
      email: ['abc@bbc.com', Validators.required],
      password: ['abc', Validators.required]
  });
 
  //----------
  }

  public get formControls() { return this.loginForm.controls; }

  public login(loginForm:any) 
    {
      
      //if (this.loginForm.get('email').value=='abc@bbc.com' && this.loginForm.get('password').value=='abc')
        //this.router.navigate(['/Admin']);
      
        if (this._facade.getloginProcess(this.loginForm.get('email').value)==1)
          this.router.navigate(['/Admin']);
        else
        //alert('no');
        this.isSubmitted=true;

    }

  public keypress(event:any){
    

    //alert(event.target.value);
      if(event.target.value!='abc@bbc.com')
      {
        //alert('s');
        this.authorisedDialogue=false;
      }
      else
      this.authorisedDialogue=true;

  }

    
    
}


