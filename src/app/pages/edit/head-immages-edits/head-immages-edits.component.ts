import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileUpload } from 'src/app/models/fileupload.model';
import { HomeImmageIntesation } from 'src/app/models/home.immages.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-head-immages-edits',
  templateUrl: './head-immages-edits.component.html',
  styleUrls: ['./head-immages-edits.component.scss']
})
export class HeadImmagesEditsComponent implements OnInit{
  form! : FormGroup;
  testing! : FormGroup;
  immages!: HomeImmageIntesation[];
  path: string = "home-head";

  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;

  constructor(private Firebase :FirebaseService){
    this.getAll();
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title : new FormControl(null,Validators.required),
      immageUrl : new FormControl(null,Validators.required),
      titleOne : new FormControl(),
      textOne : new FormControl(),
      titleTwo : new FormControl(),
      textTwo : new FormControl(),
      titleTree : new FormControl(),
      textTree : new FormControl(),
      titleFour : new FormControl(),
      textFour : new FormControl()
    });
    this.testing = new FormGroup({
      immagine: new FormControl()
    })
  }

  submit(){
    this.Firebase.insertNewHomeImmage(this.form.value,this.path).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  getAll(){
    this.Firebase.getHomeImmages(this.path).subscribe(
      data => {
        this.immages = Object.keys(data).map((key)=> {
          data[key].id = key;
          return data[key];
        });
      }
    )
  }

  delete( id : string | null ){
    this.Firebase.deleteHomeImmage(id,this.path);
  }

  test(){
   
    const fil = new FileUpload( this.testing?.value );
    console.log(fil);

  }
  

}
