import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardSearchComponent } from './cardsearch.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [CardSearchComponent],
  exports: [CardSearchComponent],
})
export class CardSearchComponentModule {}
