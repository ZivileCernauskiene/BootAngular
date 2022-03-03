import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private from:FormBuilder, private validation:ValidationService) { }

  ngOnInit(): void {
  }

  register=this.from.group({
    name:['', Validators.required],
    password:['', Validators.required],
    password2:['', Validators.required,  ],
    email:['', [Validators.email, Validators.required]]
  },
  {
    validator: this.validation.MatchPassword('password', 'password2')
  })

submit(){
  console.log('submit')
  if(this.register.valid){
    console.log(this.register.value)
  this.register.reset()
  }
  else alert('bad')
}

get control(){
  return this.register.controls
}
}
