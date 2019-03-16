import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { XboxPage } from './xbox';

@NgModule({
  declarations: [
    XboxPage,
  ],
  imports: [
    IonicPageModule.forChild(XboxPage),
  ],
})
export class XboxPageModule {}
