import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gost-bakc-ground',
  templateUrl: './gost-bakc-ground.component.html',
  styleUrls: ['./gost-bakc-ground.component.scss']
})
export class GostBakcGroundComponent implements OnInit{
  @Input() data : any;

  texts! : text[];

  text! : text | null;

  ngOnInit(): void {
    console.log(this.data)
    this.texts = this.data;
    this.text = this.texts[0];
  }

}

type text = {
  title:string;
  content:string;
  immage: string;
}