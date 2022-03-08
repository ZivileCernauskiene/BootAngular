import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { FireAuthService } from '../fire-auth.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})

export class LoginRegisterComponent implements OnInit {

  constructor(private fire:AngularFirestore, private form:FormBuilder, private fireAuth:FireAuthService) {
    this.fire.collection('Color').valueChanges().subscribe((x:any)=>this.naujas=x)
   }

   naujas=[]



 kazkas(){
    console.log(this.naujas)
  }

  login = this.form.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]]
  })

  get control(){
    return this.login.controls
  }

  submit(){
    if(this.login.valid){
      this.fireAuth.signIn(this.login.value.email, this.login.value.password)
    }
    else {
      alert('Please fill All form')
    }

  }

  ngOnInit(): void {
  }

}
