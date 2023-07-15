import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{
  
  manual : boolean = false;

  interval = interval(10000).subscribe({
    next: (i)=>{
      if(!this.manual){
        this.up(false);
      }
      console.log(this.manual)
      this.manual = false;
    }
  });

  ngOnInit(): void {}

  index : number = 0;
  bgImmages1 : string[] =[
    "https://picsum.photos/id/1/200/300",
    "https://picsum.photos/id/10/200/300",
    "https://picsum.photos/id/14/200/300",
    "https://picsum.photos/id/237/200/300"
  ];
  
  bgTest : string = this.bgImmages1[this.index];

  up(m:boolean){
    if( this.bgImmages1 && this.index >= this.bgImmages1.length ){
      this.index = 0;
    }else{
      this.index = this.index+1;
    }
    if (m) {
      this.manual = true;
    }
    this.bgTest = this.bgImmages1[this.index];
  }

  down(m:boolean){
    if( this.index <= 0 ){
      this.index = this.bgImmages1.length -1;
    }else{
      this.index = this.index-1;
    }
    if (m) {
      this.manual = true;
    }
    this.bgTest = this.bgImmages1[this.index];
  }

  ngOnDestroy(): void {
    this.interval.closed;
  }
}
