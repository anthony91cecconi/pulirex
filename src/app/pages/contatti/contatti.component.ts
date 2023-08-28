import { Component } from '@angular/core';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss']
})
export class ContattiComponent {

  show : number = 0;

  progress():void{
    this.show++
  }

  backProgress():void{
    this.show--;
  }

}
