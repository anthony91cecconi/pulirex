import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicePage } from 'src/app/models/services.page.model';
import { ServicesPagesService } from 'src/app/services/services-pages.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {

  servicePage!: ServicePage;
  urlParam : string ="";

  constructor(
      private serv :ServicesPagesService,
      private route: ActivatedRoute
    ){
      this.urlParam = route.snapshot.params['service'];

    this.serv.services.forEach(
      el => {
        if (el.title == this.urlParam) {
          this.servicePage = el;
        }
      }
    )
  }

  textGost = [
    {
      title: "prova1",
      content: "questo è un testo di prova"
    }
  ]

  

}
