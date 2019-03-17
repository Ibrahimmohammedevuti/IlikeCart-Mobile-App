import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BabyBoyClothing } from './baby-boy-clothing';

@NgModule({
  declarations: [
    BabyBoyClothing,
  ],
  imports: [
    IonicPageModule.forChild(BabyBoyClothing),
  ],
})
export class BabyBoyClothingModule {}
