import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenWalletPage } from './men-wallet';

@NgModule({
  declarations: [
    MenWalletPage,
  ],
  imports: [
    IonicPageModule.forChild(MenWalletPage),
  ],
})
export class MenWalletPageModule {}
