import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BabyGirlClothing } from './baby-girl-clothing';

@NgModule({
  declarations: [
    BabyGirlClothing,
  ],
  imports: [
    IonicPageModule.forChild(BabyGirlClothing),
  ],
})
export class BabyGirlClothingPageModule {}
