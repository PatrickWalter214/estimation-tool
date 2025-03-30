import { Component } from '@angular/core';
import { Standard } from './sizings';
import { CardsComponent } from "../../components/cards/cards.component";
import { EstimationTableComponent } from "../../components/estimation-table/estimation-table.component";
import { Estimation } from '../../model/Estimation';

@Component({
  selector: 'app-estimation-room',
  imports: [CardsComponent, EstimationTableComponent],
  templateUrl: './estimation-room.component.html',
  styleUrl: './estimation-room.component.scss'
})
export class EstimationRoomComponent {

  sizing = Standard;
  submitValue = (x: string) => console.log(`${x} got clicked`);
  deleteAction = () => console.log('Delete clicked');
  showAction = () => console.log('Show clicked');
  estimations: Estimation[] = [
    { name: 'John Doe with a very long name', size: '5' }
  ];

}
