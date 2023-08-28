import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {

  bgImmages: string[] =[
    "https://picsum.photos/id/10/200/300"
  ];

  textGost = [
    {
      title: "prova1",
      content: "questo è un testo di prova"
    }
  ]

}
