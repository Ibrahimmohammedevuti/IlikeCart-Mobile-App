import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WomenClothingPage } from './women-clothing';

@NgModule({
  declarations: [
    WomenClothingPage,
  ],
  imports: [
    IonicPageModule.forChild(WomenClothingPage),
  ],
})
export class WomenClothingPageModule {}
