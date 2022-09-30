import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardSearchComponent } from './cardsearch.component';

const routes: Routes = [
  {
    path: '',
    component: CardSearchComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
