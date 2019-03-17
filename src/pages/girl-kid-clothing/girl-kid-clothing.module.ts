import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GirlClothing } from './girl-kid-clothing';

@NgModule({
  declarations: [
    GirlClothing,
  ],
  imports: [
    IonicPageModule.forChild(GirlClothing),
  ],
})
export class GirlClothingModule {}
