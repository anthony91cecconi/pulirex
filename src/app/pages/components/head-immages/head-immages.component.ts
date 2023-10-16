import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { HomeImmageIntesation } from 'src/app/models/home.immages.model';

@Component({
  selector: 'app-head-immages',
  templateUrl: './head-immages.component.html',
  styleUrls: ['./head-immages.component.scss']
})
export class HeadImmagesComponent implements OnInit {//, OnDestroy{
  @Input() data : any;

  
  bgImmages! :HomeImmageIntesation[]; 
  index:number;
  bgTest!: HomeImmageIntesation;
    
  manual : boolean = false;

  constructor(){
    this.index= 0;
  }
  ngOnInit(): void {
      this.bgImmages = this.data;
      console.log("data----",this.data);
      this.bgTest = this.bgImmages[this.index];
      console.log(" bg test ---- ",this.bgTest)
    }
  
  interval = interval(10000).subscribe({
    next: (i)=>{
      if(this.bgImmages.length < 2){
        this.stopInterval();
      }else{
        if(!this.manual){
          this.up(false);
        }
        this.manual = false;
      }
    }
  });

  stopInterval(){
    this.interval.unsubscribe();
  }

  

  up(m:boolean){
    if( this.bgImmages && this.index >= this.bgImmages.length ){
      this.index = 0;
    }else{
      this.index = this.index+1;
    }
    if (m) {
      this.manual = true;
    }
    this.bgTest = this.bgImmages[this.index];
  }

  down(m:boolean){
    if( this.index <= 0 ){
      this.index = this.bgImmages.length -1;
    }else{
      this.index = this.index-1;
    }
    if (m) {
      this.manual = true;
    }
    this.bgTest = this.bgImmages[this.index];
  }

  ngOnDestroy(): void {
    this.interval.unsubscribe();
  }

  bgReturn() :string{
    console.log(`url(${this.bgTest.immageUrl})`)
    return `url(${this.bgTest.immageUrl})`
  }
  
}

