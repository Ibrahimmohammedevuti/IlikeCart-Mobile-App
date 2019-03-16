import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HairCarePage } from './hair-care';

@NgModule({
  declarations: [
    HairCarePage,
  ],
  imports: [
    IonicPageModule.forChild(HairCarePage),
  ],
})
export class HairCarePageModule {}
