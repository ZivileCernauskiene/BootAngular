import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { User } from 'firebase/auth';
import { Observable } from 'rxjs';




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
      alert(err.message + '\n Please try again.')
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

  async kazkas(){
    console.log(this.user)
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    if(this.user){
      return true
    }
    return false
  }
}
