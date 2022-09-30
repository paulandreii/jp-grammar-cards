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
  card: string;
  cardPosition: number;
  filteredCards: any[];

  constructor() {}
  ngOnInit(): void {
    this.card = this.cards[0];
    this.cardPosition = 0;
    this.filteredCards = [...this.cards];
  }

  previousCard() {
    this.cardPosition = this.cardPosition - 1;
    this.card = this.cards[this.cardPosition];
  }

  nextCard() {
    if (this.cardPosition < this.cards.length) {
      this.cardPosition = this.cardPosition + 1;
      this.card = this.cards[this.cardPosition];
    }
  }

  handleSearch(event) {
    const query = event.target.value.toLowerCase();
    this.filteredCards = this.cards.filter(d => d.toLowerCase().indexOf(query) > -1);
  }
}
