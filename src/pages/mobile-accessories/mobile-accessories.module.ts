import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MobileAccessoriesPage } from './mobile-accessories';

@NgModule({
  declarations: [
    MobileAccessoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(MobileAccessoriesPage),
  ],
})
export class MobileAccessoriesPageModule {}
