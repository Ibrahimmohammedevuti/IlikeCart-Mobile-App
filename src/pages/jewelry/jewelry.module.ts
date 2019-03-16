import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JewelryPage } from './jewelry';

@NgModule({
  declarations: [
    JewelryPage,
  ],
  imports: [
    IonicPageModule.forChild(JewelryPage),
  ],
})
export class JewelryPageModule {}
