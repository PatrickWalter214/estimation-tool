import { Component, Input } from '@angular/core';
import { Estimation } from '../../model/Estimation';

@Component({
  selector: 'app-estimation-table',
  imports: [],
  templateUrl: './estimation-table.component.html',
  styleUrl: './estimation-table.component.scss'
})
export class EstimationTableComponent {

  @Input() estimations: Estimation[] = [];
  @Input() showAction = () => {};
  @Input() deleteAction = () => {};

}
