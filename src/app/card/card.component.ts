import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() cards: any[];
  @Input() type: string;
  @Input() level: string;
  @Input() firstCard: string;
  card: string;
  cardPosition: number;

  constructor() {}
  ngOnInit(): void {
    this.card = this.cards[0];
    this.cardPosition = 0;
  }

  previousCard() {
    this.cardPosition = this.cardPosition - 1;
    this.card = this.cards[this.cardPosition];
  }

  nextCard() {
    this.cardPosition = this.cardPosition + 1;
    this.card = this.cards[this.cardPosition];
  }
}
