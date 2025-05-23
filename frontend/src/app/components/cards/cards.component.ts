import { Component, Input } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-cards',
  imports: [CardComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  @Input() values: string[] = [];
  @Input() submitValueOfCard = (_value: string) => {};

  submitValue(value: string): () => void {
    return () => this.submitValueOfCard(value);
  }

}
