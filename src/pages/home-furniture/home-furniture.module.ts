import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeFurniturePage } from './home-furniture';

@NgModule({
  declarations: [
    HomeFurniturePage,
  ],
  imports: [
    IonicPageModule.forChild(HomeFurniturePage),
  ],
})
export class HomeFurniturePageModule {}
