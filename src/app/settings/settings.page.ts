import { Component } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
})
export class SettingsPage {
  constructor(public settingsService: SettingsService) {}

  applySettings(e) {
    this.settingsService.level = e.detail.value;
    this.settingsService.kanjiVisibility =
      this.settingsService.cardPaths.kanji.hasOwnProperty(e.detail.value);
    this.settingsService.grammarVisibility =
      this.settingsService.cardPaths.grammar.hasOwnProperty(e.detail.value);
  }
}
