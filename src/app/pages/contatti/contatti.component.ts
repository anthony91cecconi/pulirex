import { Component } from '@angular/core';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss']
})
export class ContattiComponent {

  index : number = 1;
  service : string = "pul"

  next():void{
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

}
