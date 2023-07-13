import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  index : number = 0;
  bgImmages1 : string[] =[
    "https://picsum.photos/id/1/200/300",
    "https://picsum.photos/id/10/200/300",
    "https://picsum.photos/id/14/200/300",
    "https://picsum.photos/id/237/200/300"
  ];
  
  times = 500;
  

  bgTest : string = this.bgImmages1[this.index];

  up(){
    console.log("---");
    if( this.bgImmages1 && this.index >= this.bgImmages1.length ){
      this.index = 0;
    }else{
      this.index = this.index+1;
    }

    
    console.log(this.index);
    this.bgTest = this.bgImmages1[this.index];
  }

  down(){
    console.log("---");
    if( this.index <= 0 ){
      this.index = this.bgImmages1.length -1;
    }else{
      this.index = this.index-1;
    }
    console.log(this.index);
    this.bgTest = this.bgImmages1[this.index];
  }


  timeOutImmage(){

  }
}
