import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GirlShoes } from './girl-kid-shoes';

@NgModule({
  declarations: [
    GirlShoes,
  ],
  imports: [
    IonicPageModule.forChild(GirlShoes),
  ],
})
export class GirlShoesModule {}
