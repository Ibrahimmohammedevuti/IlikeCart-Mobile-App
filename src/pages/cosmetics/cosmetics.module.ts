import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CosmeticsPage } from './cosmetics';

@NgModule({
  declarations: [
    CosmeticsPage,
  ],
  imports: [
    IonicPageModule.forChild(CosmeticsPage),
  ],
})
export class CosmeticsPageModule {}
