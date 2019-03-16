import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeOfficeAppliancesPage } from './home-office-appliances';

@NgModule({
  declarations: [
    HomeOfficeAppliancesPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeOfficeAppliancesPage),
  ],
})
export class HomeOfficeAppliancesPageModule {}
