import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabletsPage } from './tablets';

@NgModule({
  declarations: [
    TabletsPage,
  ],
  imports: [
    IonicPageModule.forChild(TabletsPage),
  ],
})
export class TabletsPageModule {}
