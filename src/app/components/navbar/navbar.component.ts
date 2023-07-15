import { Component } from '@angular/core';
import { AuthFireService } from 'src/app/services/auth.fire.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor( private auth : AuthFireService ){

  }

  isLog(){
    return this.auth.isLogged;
  }

}
