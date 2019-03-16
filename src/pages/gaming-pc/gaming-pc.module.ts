import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GamingPcPage } from './gaming-pc';

@NgModule({
  declarations: [
    GamingPcPage,
  ],
  imports: [
    IonicPageModule.forChild(GamingPcPage),
  ],
})
export class GamingPcPageModule {}
