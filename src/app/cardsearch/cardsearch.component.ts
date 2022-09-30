import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-search',
  templateUrl: 'cardsearch.component.html',
  styleUrls: ['cardsearch.component.scss'],
})
export class CardSearchComponent implements OnInit {
  @Input() cards: any[];
  @Input() type: string;
  @Input() level: string;
  filteredCards: any[];

  constructor() {}
  ngOnInit(): void {
    this.filteredCards = [...this.cards];
  }

  handleSearch(event) {
    const query = event.target.value.toLowerCase();
    this.filteredCards = this.cards.filter(d => d.toLowerCase().indexOf(query) > -1);
  }
}
