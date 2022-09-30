import { Injectable } from '@angular/core';
import cardPaths from '../data/card-paths.json';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  level = 'n5';
  vocabularyVisibility = false;
  cardPaths = cardPaths;
  kanjiVisibility = cardPaths.kanji.hasOwnProperty(this.level);
  grammarVisibility = cardPaths.grammar.hasOwnProperty(this.level);

  constructor() {}
}
