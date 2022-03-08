import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { FireAuthService } from '../fire-auth.service';
import { ValidationService } from '../validation.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private from: FormBuilder, private validation: ValidationService, private auth: AngularFireAuth, private fire:FireAuthService) { }

    ngOnInit(): void {
    }

    register = this.from.group({
        name: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        password2: ['', [Validators.required, Validators.minLength(6)]],
        email: ['', [Validators.email, Validators.required]]
    },
        {
            validator: this.validation.MatchPassword('password', 'password2')
        })



    submit() {
        console.log(this.register.value)

        if (this.register.valid) {
            console.log(this.register.value)
            this.fire.signUp(this.register.value.email, this.register.value.password)

            this.register.reset()
        }
        else alert('invalid form')
    }

    checkLengt(x:string)
    {
        return x || x.length >= 6;
    }

    get control() {
        return this.register.controls
    }
}
