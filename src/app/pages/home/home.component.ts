import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  bgImmages: string[] =[
    "https://picsum.photos/id/1/200/300",
    "https://picsum.photos/id/10/200/300",
    "https://picsum.photos/id/14/200/300",
    "https://picsum.photos/id/237/200/300"
  ];

}
