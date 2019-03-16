import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpModule } from '@angular/http';
import { PayPal } from '@ionic-native/paypal';
import { IonicStorageModule } from '@ionic/storage';
import { OneSignal } from "@ionic-native/onesignal";
import { WoocommerceProvider } from '../providers/woocommerce/woocommerce';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { CameraPage } from '../pages/camera/camera';
import { Checkout } from '../pages/checkout/checkout';
import { Cart } from '../pages/cart/cart';
import { ComputerAccessoriesPage } from '../pages/computer-accessories/computer-accessories';
import { CosmeticsPage } from '../pages/cosmetics/cosmetics';
import { DesktopPage } from '../pages/desktop/desktop';
import { FeedingAccessoriesPage } from '../pages/feeding-accessories/feeding-accessories';
import { GamingPcPage } from '../pages/gaming-pc/gaming-pc';
import { HairCarePage } from '../pages/hair-care/hair-care';
import { HomeAudioPage } from '../pages/home-audio/home-audio';
import { HomeFurniturePage } from '../pages/home-furniture/home-furniture';
import { HomeKitchenPage } from '../pages/home-kitchen/home-kitchen';
import { HomeOfficeAppliancesPage } from '../pages/home-office-appliances/home-office-appliances';
import { IndoorToysPage } from '../pages/indoor-toys/indoor-toys';
import { JewelryPage } from '../pages/jewelry/jewelry';
import { LaptopPage } from '../pages/laptop/laptop';
import { Login } from '../pages/login/login';
import { MenBagsPage } from '../pages/men-bags/men-bags'
import { MenClothingPage } from '../pages/men-clothing/men-clothing';
import { MenShoesPage } from '../pages/men-shoes/men-shoes';
import { MenWalletPage } from '../pages/men-wallet/men-wallet';
import { MenWatchesPage } from '../pages/men-watches/men-watches';
import { MobileAccessoriesPage } from '../pages/mobile-accessories/mobile-accessories';
import { NewPage } from '../pages/new/new';
import { OutdoorToysPage } from '../pages/outdoor-toys/outdoor-toys';
import { PerfumePage } from '../pages/perfume/perfume';
import { PlaystationPage } from '../pages/playstation/playstation'; 
import { ProductDetails } from '../pages/product-details/product-details';
import { RfToysPage } from '../pages/rf-toys/rf-toys';
import { SearchPage } from '../pages/search/search';
import { SignupPage } from '../pages/signup/signup';
import { SmartphonesPage } from '../pages/smartphones/smartphones';
import { TabletsPage } from '../pages/tablets/tablets';
import { TelevisionPage } from '../pages/television/television';
import { WomenBagsPage } from '../pages/women-bags/women-bags';
import { WomenClothingPage } from '../pages/women-clothing/women-clothing';
import { WomenShoesPage } from '../pages/women-shoes/women-shoes';
import { WomenWatchesPage } from '../pages/women-watches/women-watches';
import { XboxPage } from '../pages/xbox/xbox';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { WoocommerceProvider } from '../providers/woocommerce/woocommerce';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
   // ListPage,
    CameraPage,
    Checkout,
    Cart,
    ComputerAccessoriesPage,
    CosmeticsPage,
    DesktopPage,
    FeedingAccessoriesPage,
    GamingPcPage,
    HairCarePage,
    HomeAudioPage,
    HomeFurniturePage,
    HomeKitchenPage,
    HomeOfficeAppliancesPage,
    IndoorToysPage,
    JewelryPage,
    LaptopPage,
    Login,
    MenBagsPage,
    MenClothingPage,
    MenShoesPage,
    MenWalletPage,
    MenWatchesPage,
    MobileAccessoriesPage,
    NewPage,
    OutdoorToysPage,
    PerfumePage,
    PlaystationPage,
    ProductDetails,
    RfToysPage,
    SearchPage,
    SignupPage,
    SmartphonesPage,
    TabletsPage,
    TelevisionPage,
    WomenBagsPage,
    WomenClothingPage,
    WomenShoesPage,
    WomenWatchesPage,
    XboxPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    //ListPage,
    CameraPage,
    Checkout,
    Cart,
    ComputerAccessoriesPage,
    CosmeticsPage,
    DesktopPage,
    FeedingAccessoriesPage,
    GamingPcPage,
    HairCarePage,
    HomeAudioPage,
    HomeFurniturePage,
    HomeKitchenPage,
    HomeOfficeAppliancesPage,
    IndoorToysPage,
    JewelryPage,
    LaptopPage,
    Login,
    MenBagsPage,
    MenClothingPage,
    MenShoesPage,
    MenWalletPage,
    MenWatchesPage,
    MobileAccessoriesPage,
    NewPage,
    OutdoorToysPage,
    PerfumePage,
    PlaystationPage,
    ProductDetails,
    RfToysPage,
    SearchPage,
    SignupPage,
    SmartphonesPage,
    TabletsPage,
    TelevisionPage,
    WomenBagsPage,
    WomenClothingPage,
    WomenShoesPage,
    WomenWatchesPage,
    XboxPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PayPal,
    OneSignal,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WoocommerceProvider
  ]
})
export class AppModule {}
