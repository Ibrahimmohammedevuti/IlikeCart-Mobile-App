import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoyShoes } from './boy-kid-shoes';

@NgModule({
  declarations: [
    BoyShoes,
  ],
  imports: [
    IonicPageModule.forChild(BoyShoes),
  ],
})
export class BoyShoesModule {}
