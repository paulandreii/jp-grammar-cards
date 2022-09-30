import { Component } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  kanjiCards: any[];
  constructor(public settingsService: SettingsService) {}

  ionViewWillEnter() {
    this.kanjiCards = this.settingsService.cardPaths.kanji.hasOwnProperty(
      this.settingsService.level
    )
      ? this.settingsService.cardPaths.kanji[this.settingsService.level]
      : undefined;
  }

  ionViewWillLeave() {
    this.kanjiCards = undefined;
  }
}
