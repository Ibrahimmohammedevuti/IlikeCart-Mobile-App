import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoyClothing } from './boy-kid-clothing';

@NgModule({
  declarations: [
    BoyClothing,
  ],
  imports: [
    IonicPageModule.forChild(BoyClothing),
  ],
})
export class BoyClothingeModule {}
