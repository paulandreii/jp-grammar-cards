import { Component } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  grammarCards: any[];

  constructor(public settingsService: SettingsService) {}

  ionViewWillEnter() {
    this.grammarCards = this.settingsService.cardPaths.grammar.hasOwnProperty(
      this.settingsService.level
    )
      ? this.settingsService.cardPaths.grammar[this.settingsService.level]
      : undefined;
  }

  ionViewWillLeave() {
    this.grammarCards = undefined;
  }
}
