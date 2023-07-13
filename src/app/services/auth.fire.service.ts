import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, from } from 'rxjs';
import { LoginInterface } from 'src/classes/login.interface';
import { User } from 'src/classes/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthFireService {
  public isLogged : boolean = false;
  user : User | undefined;
  constructor(private auth : AngularFireAuth) { }

  singIn( params : LoginInterface ) : Observable<any> {
    return from(this.auth.signInWithEmailAndPassword( params.email,params.password));
  }

  storageUser(email:string){
    this.user = new User(email);
    console.log(this.user)
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  isLoggedIn() : boolean{
    return this.isLogged;
  }
}
