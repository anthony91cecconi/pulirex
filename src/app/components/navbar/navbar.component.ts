import { Component } from '@angular/core';
import { AuthFireService } from 'src/app/services/auth.fire.service';
import { ServicesPagesService } from 'src/app/services/services-pages.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  sivices! : string[];

  constructor( private auth : AuthFireService, private serv1 : ServicesPagesService ){
    this.sivices = this.serv1.services.map(el => {
      return el.title  
    })
  }

  isLog(){
    return this.auth.isLogged;
  }

}
