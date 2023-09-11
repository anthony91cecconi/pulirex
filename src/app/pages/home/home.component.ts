import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { HomeImmageIntesation } from 'src/app/models/home.immages.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  bgImmages: HomeImmageIntesation[] =[
    /*
    {
      id:null,
      title : "prova1",
      immageUrl : "https://picsum.photos/id/1/200/300",
      titleOne :"prova1",
      textOne : "testo della prova 1",
      titleTwo : null,
      textTwo : null,
      titleTree : null,
      textTree : null,
      titleFour : null,
      textFour :null
    },
    {
      id:null,
      title : "prova2",
      immageUrl : "https://picsum.photos/id/1/200/300",
      titleOne :null,
      textOne : null,
      titleTwo : "prova2",
      textTwo : "testo della prova 2",
      titleTree : null,
      textTree : null,
      titleFour : "prova4",
      textFour :"testo della prova 4"
    },
    {
      id:null,
      title : "prova3",
      immageUrl : "https://picsum.photos/id/10/200/300",
      titleOne :null,
      textOne : null,
      titleTwo : null,
      textTwo : null,
      titleTree : "prova3",
      textTree : "testo della prova 3",
      titleFour : null,
      textFour :null
    }*/
  ];


  textGost = [
    {
      title: "prova1",
      content: "questo è un testo di prova",
      immage:"../../../assets/imgs/home.jpg"
    }
  ]
}
