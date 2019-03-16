import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlaystationPage } from './playstation';

@NgModule({
  declarations: [
    PlaystationPage,
  ],
  imports: [
    IonicPageModule.forChild(PlaystationPage),
  ],
})
export class PlaystationPageModule {}
