import { Component } from '@angular/core';
import { Preventive } from 'src/app/models/prevent.model';

@Component({
  selector: 'app-preventivi',
  templateUrl: './preventivi.component.html',
  styleUrls: ['./preventivi.component.scss']
})
export class PreventiviComponent {

  vision : Preventive = {
    ssi: '',
    subType: '',
    name: '',
    surname: '',
    email: '',
    prefix: '',
    telephon: 0,
    typeCustomer: '',
    times: '',
    dettail: '',
    addres: '',
    'addres-number': 0,
    city: '',
    province: '',
    cap: '',
    nation: ''
  };

  preventives : Preventive[] = [
    {
      //a quali servizi sei interessato?
      "ssi" : "test",
      //dettagli
      "subType" : "test",
      //dati personali cliente
      "name" : "test",
      "surname" : "test",
      "email" : "test",
      "prefix" : "test",
      "telephon" : 1,
      // tipo cliente
      "typeCustomer" : "test",
      // cadenza interventi
      "times" : "test",
      //dettagli
      "dettail" : "test",
      // indirizzo interventi
      "addres" : "test",
      "addres-number" : 1,
      "city" : "test",
      "province" : "test",
      "cap" : "test",
      "nation" : "test",
    },
    {
      //a quali servizi sei interessato?
      "ssi" : "test",
      //dettagli
      "subType" : "test",
      //dati personali cliente
      "name" : "test2",
      "surname" : "test",
      "email" : "test",
      "prefix" : "test",
      "telephon" : 1,
      // tipo cliente
      "typeCustomer" : "test",
      // cadenza interventi
      "times" : "test",
      //dettagli
      "dettail" : "test",
      // indirizzo interventi
      "addres" : "test",
      "addres-number" : 1,
      "city" : "test",
      "province" : "test",
      "cap" : "test",
      "nation" : "test",
    },
    {
      //a quali servizi sei interessato?
      "ssi" : "test",
      //dettagli
      "subType" : "test",
      //dati personali cliente
      "name" : "test3",
      "surname" : "test",
      "email" : "test",
      "prefix" : "test",
      "telephon" : 1,
      // tipo cliente
      "typeCustomer" : "test",
      // cadenza interventi
      "times" : "test",
      //dettagli
      "dettail" : "test",
      // indirizzo interventi
      "addres" : "test",
      "addres-number" : 1,
      "city" : "test",
      "province" : "test",
      "cap" : "test",
      "nation" : "test",
    }
  ];


  changeVision(preventivo:Preventive){
    this.vision = preventivo;
  }

}
