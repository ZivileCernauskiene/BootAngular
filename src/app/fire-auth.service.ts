import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'firebase/auth';




@Injectable({
  providedIn: 'root'
})


export class FireAuthService {

  constructor(private fireAuth:AngularFireAuth) { }

  user :any

  signUp(email:string, password:string){
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(res=>{
      console.log("Registration successful. You can now login with your email: " + email)
    }).catch(err=>{
      console.log(err.message)
    })
  }

  signIn(email:string, password:string){
    this.fireAuth.signInWithEmailAndPassword(email, password).then(async()=>{
      console.log('signed in as ' + email)
      this.user= await this.fireAuth.currentUser
    }).catch(err=>{
      console.log(err.message)

    })
  }

  signOut(){
    this.fireAuth.signOut().then(async()=>{
      this.user=null;
    })
  }

}
