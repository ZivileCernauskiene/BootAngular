import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})

export class LoginRegisterComponent implements OnInit {

  constructor(private fire:AngularFirestore, private form:FormBuilder) {
    this.fire.collection('Color').valueChanges().subscribe((x:any)=>this.naujas=x)
   }

   naujas=[]



 kazkas(){
    console.log(this.naujas)
  }

  login = this.form.group({
    email:['', Validators.required, Validators.email],
    password:['', Validators.required]
  })

  get control(){
    return this.login.controls
  }

  submit(){
    if(this.login.valid){
      console.log(this.login.value)
    this.login.reset()
    alert('you logged in')
    }
    else {
      alert('bad')
    }

  }

  ngOnInit(): void {
  }

}
