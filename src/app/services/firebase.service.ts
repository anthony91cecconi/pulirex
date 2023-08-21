import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeImmageIntesation } from '../models/home.immages.model';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase
    ) { }

  insertNewHomeImmage( immage : HomeImmageIntesation , path : string) : Observable<any> {
    return this.http.post("https://pulirex-21e94-default-rtdb.firebaseio.com/" + path + "/.json", immage);
  }

  getHomeImmages(path : string):Observable<any>{
    return this.http.get("https://pulirex-21e94-default-rtdb.firebaseio.com/" + path + "/.json");
  }

  deleteHomeImmage(id : string | null, path : string){
    this.http.delete("https://pulirex-21e94-default-rtdb.firebaseio.com/" + path + "/"+id+".json");
  }

  insertFile( file : File , path :string ){
    return this.http.post("gs://pulirex-21e94.appspot.com" + path + "/.json", file);
  }

}
