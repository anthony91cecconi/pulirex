/*import { Injectable, inject } from '@angular/core';
import { Storage, ref, uploadBytesResumable, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  title = 'test';
  public file : any = {};
  constructor(public storage: Storage) { }

  chooseFile(event: any) {
    this.file = event.target.file[0];
  }

  addData(file : any) {
    this.file = file
    const storageRef = ref(this.storage,  this.file.name);
    const uploadTask = uploadBytesResumable(storageRef,this.file);
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes);
        console.log('upload is ' + progress + '% done');
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl)=>{
          console.log('file available at ', downloadUrl)
        })
      }
    )
  }


}
*/
