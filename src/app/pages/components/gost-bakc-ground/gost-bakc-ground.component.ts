import { Component, Input, OnInit } from '@angular/core';
import { GhostBG } from 'src/app/models/ghost.model';

@Component({
  selector: 'app-gost-bakc-ground',
  templateUrl: './gost-bakc-ground.component.html',
  styleUrls: ['./gost-bakc-ground.component.scss']
})
export class GostBakcGroundComponent implements OnInit{
  @Input() data : any;

  texts! : GhostBG[];

  text! : GhostBG | null;

  ngOnInit(): void {
    console.log(this.data)
    this.texts = this.data;
    this.text = this.data[0];
  }

}