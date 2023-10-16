import { Injectable } from '@angular/core';
import { ServicePage } from '../models/services.page.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesPagesService {

  constructor() { }


  services : ServicePage[] =[
    {
      content: "test",
      title: "pulizie",
      headImmage: [
        {
          id:null,
          title:"pulizie",
          immageUrl :"../../assets/imgs/pulizie.jpg",
          titleOne : null,
          textOne : null,
          titleTwo : null,
          textTwo :  null,
          titleTree :  null,
          textTree :  null,
          titleFour :  null,
          textFour :  null
        }
      ],
      photos:["",""],
      ghosts: [
        {
          title: "prova1",
          content: "questo è un testo di prova",
          immage:"../../../assets/imgs/home.jpg"
        }
      ],
    }
  ];

}
