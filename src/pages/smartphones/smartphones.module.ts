import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmartphonesPage } from './smartphones';

@NgModule({
  declarations: [
    SmartphonesPage,
  ],
  imports: [
    IonicPageModule.forChild(SmartphonesPage),
  ],
})
export class SmartphonesPageModule {}
