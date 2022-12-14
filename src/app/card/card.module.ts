import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card.component';
import { CardSearchComponentModule } from '../cardsearch/cardsearch.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CardSearchComponentModule,
  ],
  declarations: [CardComponent],
  exports: [CardComponent],
})
export class CardComponentModule {}
