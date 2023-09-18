import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss']
})
export class ContattiComponent {
  mail! : FormGroup;
  index : number = 1;
  service : string | null = null;

  upload : number[] = [ 0,16,32,48,64,80,96,100 ]



  constructor(private fire:FirebaseService){
    this.mail = new FormGroup(
      {
        //a quali servizi sei interessato?
        "ssi" : new FormControl("test"),
        //dettagli
        "subType" : new FormControl("test"),
        //dati personali cliente
        "name" : new FormControl("test"),
        "surname" : new FormControl("test"),
        "email" : new FormControl("test"),
        "prefix" : new FormControl("test"),
        "telephon" : new FormControl(1),
        // tipo cliente
        "typeCustomer" : new FormControl("test"),
        // cadenza interventi
        "times" : new FormControl("test"),
        //dettagli
        "dettail" : new FormControl("test"),
        // indirizzo interventi
        "addres" : new FormControl("test"),
        "addres-number" : new FormControl(1),
        "city" : new FormControl("test"),
        "province" : new FormControl("test"),
        "cap" : new FormControl("test"),
        "nation" : new FormControl("test"),

      }
    );
  }

  next():void{
    console.log(this.mail)
    this.index++
  }

  back():void{
    this.index--;
  }

  showControl(pos:number,type : string | null):String{
    if (type != null) {
      if (pos == this.index && type == this.service) {
        return "";
      }
      return "d-none";
    }

    if (pos == this.index) {
      return "";
    }
    return "d-none";
  }

  changeType(type :string){
    this.service = type;
  }
  
  saved(){
    let date = new Date().getDate();
    let date2 = new Date().getMonth();
    let date3 = new Date().getFullYear();
    this.fire.insertRequestPreventivo(`/preventivi/richieste`,this.mail.value).subscribe()
  }

  widt(){
    return  'width:'+ this.upload[this.index] +'%;'
  }


}
