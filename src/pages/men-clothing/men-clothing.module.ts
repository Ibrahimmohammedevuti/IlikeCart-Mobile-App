import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenClothingPage } from './men-clothing';

@NgModule({
  declarations: [
    MenClothingPage,
  ],
  imports: [
    IonicPageModule.forChild(MenClothingPage),
  ],
})
export class MenClothingPageModule {}
