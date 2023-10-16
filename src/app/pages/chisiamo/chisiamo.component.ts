import { Component } from '@angular/core';
import { HomeImmageIntesation } from 'src/app/models/home.immages.model';

@Component({
  selector: 'app-chisiamo',
  templateUrl: './chisiamo.component.html',
  styleUrls: ['./chisiamo.component.scss']
})
export class ChisiamoComponent {


  bgImmages: HomeImmageIntesation[] =[
    {
      id:null,
      title:"pulizie",
      immageUrl :"../../assets/imgs/pulizie.jpg",
      titleOne : null,
      textOne : null,
      titleTwo : null,
      textTwo :  null,
      titleTree :  null,
      textTree :  null,
      titleFour :  null,
      textFour :  null
    }
  ];

  textGost = [
    {
      title: "prova1",
      content: "questo è un testo di prova"
    }
  ]

}
