import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeKitchenPage } from './home-kitchen';

@NgModule({
  declarations: [
    HomeKitchenPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeKitchenPage),
  ],
})
export class HomeKitchenPageModule {}
