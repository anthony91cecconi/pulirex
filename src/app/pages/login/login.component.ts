import { Component } from '@angular/core';
import { AuthFireService } from 'src/app/services/auth.fire.service';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginInterface } from 'src/classes/login.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email : new FormControl(),
    password : new FormControl()
  });
  constructor(private service : AuthFireService, private route : Router){}

  login(){
    let loger : LoginInterface = {
      email: this.loginForm.get("email")?.value,
      password: this.loginForm.get("password")?.value!,
    }
    this.service.singIn(loger).subscribe({
      next: (el : any )=> {
        console.log(el.user)
        console.log(el.user.email)
        this.service.storageUser(el.user.email)
        //this.route.navigateByUrl("");
      },
      error:() => {
        //TODO: inserire dialog errore
      }
    })
  }

}
