import { Component } from '@angular/core';

@Component({
  selector: 'app-chisiamo',
  templateUrl: './chisiamo.component.html',
  styleUrls: ['./chisiamo.component.scss']
})
export class ChisiamoComponent {


  bgImmages: string[] =[
    "https://picsum.photos/id/1/200/300"
  ];

  textGost = [
    {
      title: "prova1",
      content: "questo è un testo di prova"
    }
  ]

}
