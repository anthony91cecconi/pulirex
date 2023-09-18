import { Component, Input } from '@angular/core';
import { Preventive } from 'src/app/models/prevent.model';

@Component({
  selector: 'app-preventivo',
  templateUrl: './preventivo.component.html',
  styleUrls: ['./preventivo.component.scss']
})
export class PreventivoComponent {
  @Input() preventive! : Preventive;
}
