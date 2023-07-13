import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { LoginInterface } from 'src/classes/login.interface';
import { User } from 'src/classes/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthFireService {
  public isLogged : boolean = false;
  user : User | undefined;
  constructor(
    private auth : AngularFireAuth,
    private router: Router
    ) { }

  singIn( params : LoginInterface ) : Observable<any> {
    return from(this.auth.signInWithEmailAndPassword( params.email,params.password));
  }

  storageUser(email:string){
    this.user = new User(email);
    localStorage.setItem('user', JSON.stringify(this.user));

    this.router.navigate(['']);
  }

  isLoggedIn() : boolean{
    if(this.isLogged){
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }
  }
}
