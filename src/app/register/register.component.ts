import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../validation.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private from: FormBuilder, private validation: ValidationService, private auth: AngularFireAuth) { }

    ngOnInit(): void {
    }

    register = this.from.group({
        name: ['', Validators.required],
        password: ['', Validators.required, Validators.minLength(6)],
        password2: ['', Validators.required, Validators.minLength(6)],
        email: ['', [Validators.email, Validators.required]]
    },
        {
            validator: this.validation.MatchPassword('password', 'password2')
        })



    submit() {
        console.log('submit')

        if (this.register.valid) {
            console.log(this.register.value)
            this.auth.createUserWithEmailAndPassword(this.register.value.email, this.register.value.password).then(res => {
                alert('sveikinu'); console.log(res)
            }).catch(err => { console.log(err.message); alert(err.message) })

            this.register.reset()
        }
        else alert('bad')
    }

    checkLengt(x:string)
    {
        return x || x.length >= 6;
    }

    get control() {
        return this.register.controls
    }
}
