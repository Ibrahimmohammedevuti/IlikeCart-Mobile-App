import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { CameraPage } from '../pages/camera/camera';
//import { CheckoutPage } from '../pages/checkout/checkout';
//import { CartPage } from '../pages/cart/cart';
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
//import { LoginPage } from '../pages/login/login';
import { MenBagsPage } from '../pages/men-bags/men-bags'
import { MenClothingPage } from '../pages/men-clothing/men-clothing';
import { MenShoesPage } from '../pages/men-shoes/men-shoes';
import { MenWalletPage } from '../pages/men-wallet/men-wallet';
import { MenWatchesPage } from '../pages/men-watches/men-watches';
import { MobileAccessoriesPage } from '../pages/mobile-accessories/mobile-accessories';
//import { NewPage } from '../pages/new/new';
import { OutdoorToysPage } from '../pages/outdoor-toys/outdoor-toys';
import { PerfumePage } from '../pages/perfume/perfume';
import { PlaystationPage } from '../pages/playstation/playstation'; 
import { ProductDetails } from '../pages/product-details/product-details';
import { RfToysPage } from '../pages/rf-toys/rf-toys';
//import { SearchPage } from '../pages/search/search';
import { SignupPage } from '../pages/signup/signup';
import { SmartphonesPage } from '../pages/smartphones/smartphones';
import { TabletsPage } from '../pages/tablets/tablets';
import { TelevisionPage } from '../pages/television/television';
import { WomenBagsPage } from '../pages/women-bags/women-bags';
import { WomenClothingPage } from '../pages/women-clothing/women-clothing';
import { WomenShoesPage } from '../pages/women-shoes/women-shoes';
import { WomenWatchesPage } from '../pages/women-watches/women-watches';
import { XboxPage } from '../pages/xbox/xbox';
import { GirlClothing } from '../pages/girl-kid-clothing/girl-kid-clothing'
import { GirlShoes } from '../pages/girl-kid-shoes/girl-kid-shoes'
import { BoyClothing } from '../pages/boy-kid-clothing/boy-kid-clothing'
import { BoyShoes } from '../pages/boy-kid-shoes/boy-kid-shoes'
import { BabyBoyClothing } from '../pages/baby-boy-clothing/baby-boy-clothing'
import { BabyGirlClothing } from '../pages/baby-girl-clothing/baby-girl-clothing'


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
      this.pages = [
      { title: 'Home', component: HomePage },
      //{ title: 'List', component: ListPage },
     /* { title: 'SmartPhones', component: SmartphonesPage },
      { title: 'Tablets', component: TabletsPage },
      { title: 'Accessories', component: MobileAccessoriesPage },
      { title: 'Laptops', component: LaptopPage },
      { title: 'Desktops', component: DesktopPage },
      { title: 'Computer Accessories', component: ComputerAccessoriesPage },
      { title: 'HomeTelevision & Video', component: TelevisionPage },
      { title: 'Home Audio', component: HomeAudioPage },
      { title: 'Camera & Photo', component: CameraPage },
      { title: 'Appliances', component: HomeOfficeAppliancesPage },
      { title: 'Home & Furniture', component: HomeFurniturePage },
      { title: 'Home & Kitchen', component: HomeKitchenPage },
      { title: 'Perfumes', component: PerfumePage },
      { title: 'Cosmetics', component: CosmeticsPage },
      { title: 'Hair Care', component: HairCarePage },
      { title: 'Playstation', component: PlaystationPage },
      { title: 'XBOX', component: XboxPage },
      { title: 'Gaming PC', component: GamingPcPage },
      { title: 'Outdoor Toys', component: OutdoorToysPage },
      { title: 'Indoor Toys', component: IndoorToysPage },
      { title: 'RF Toys', component: RfToysPage },
      { title: 'Feeding Accessories', component: FeedingAccessoriesPage },
      { title: 'Clothings', component: MenClothingPage },
      { title: 'Shoes', component: MenShoesPage },
      { title: 'Watches', component: MenWatchesPage },
      { title: 'Bags', component: MenBagsPage },
      { title: 'Wallets', component: MenWalletPage },
      { title: 'Clothing', component: WomenClothingPage },
      { title: 'Shoes & Footwear', component: WomenShoesPage },
      { title: 'Watch', component: WomenWatchesPage },
      { title: 'Handbags & Wallets', component: WomenBagsPage },
      { title: 'Jewelry', component: JewelryPage },*/
    ]; 
  } 

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

//Smartphone navigation
openSmartphonesPage() {

  this.nav.push(SmartphonesPage);
 }
//Tablets navigation
 openTabletsPage() {

  this.nav.push(TabletsPage);
 }
 //mobile accessories
 openMobileAccessoriesPage() {

  this.nav.push(MobileAccessoriesPage);
 }
 //laptop
 goToLaptopPage() {

  this.nav.push(LaptopPage);
 }
 //desktop
 goToDesktopPage() {

  this.nav.push(DesktopPage);
 }
 //computer accessories
 goToComputerAccessoriesPage() {

  this.nav.push(ComputerAccessoriesPage);
 }
 //television
 pushTelevisionPage() {

  this.nav.push(TelevisionPage);
 }
 //home audio
 pushHomeAudioPage() {

  this.nav.push(HomeAudioPage);
 }
 //camera
 pushCameraPage() {

  this.nav.push(CameraPage);
 }
 //home appliance
 tapHomeOfficeAppliancesPage() {

  this.nav.push(HomeOfficeAppliancesPage);
 }
 //home furniture
 tapHomeFurniturePage() {

  this.nav.push(HomeFurniturePage);
 }
 //home kitchen
 tapHomeKitchenPage() {

  this.nav.push(HomeKitchenPage);
 }
 //perfume
 pullPerfumePage() {

  this.nav.push(PerfumePage);
 }
 // cosmetics
 pullCosmeticsPage() {

  this.nav.push(CosmeticsPage);
 }
 //hair care
 pullHairCarePage() {

  this.nav.push(HairCarePage);
 }
 
 popPlaystationPage() {

  this.nav.push(PlaystationPage);
 }
 //xbox
 popXboxPage() {

  this.nav.push(XboxPage);
 }
 //gaming pc
 popGamingPcPage() {

  this.nav.push(GamingPcPage);
 }
 //outdoor toys
 NavPushOutdoorToysPage() {

  this.nav.push(OutdoorToysPage);
 }
 //indoor toys
 NavPushIndoorToysPage() {

  this.nav.push(IndoorToysPage);
 }
 //Rf toys
 NavPushRfToysPage() {

  this.nav.push(RfToysPage);
 }
 //feeding accessories
 NavPushFeedingAccessoriesPage() {

  this.nav.push(FeedingAccessoriesPage);
 }
 //men clothings
 NavPullMenClothingPage() {

    this.nav.push(MenClothingPage);
   }
   //men shoes
   NavPullMenShoesPage() {

    this.nav.push(MenShoesPage);
   }
   //men watches
   NavPullMenWatchesPage() {

    this.nav.push(MenWatchesPage);
   }
   // men bags
   NavPullMenBagsPage() {

    this.nav.push(MenBagsPage);
   }
   //men wallets
   NavPullMenWalletPage() {

    this.nav.push(MenWalletPage);
   }
   // women clothing
   getWomenClothingPage() {

    this.nav.push(WomenClothingPage);
   }
   //women shoes
   getWomenShoesPage() {

    this.nav.push(WomenShoesPage);
   }
   //women bags
   getnWomenBagsPage() {

    this.nav.push(WomenBagsPage);
   }
   //women watches
   getWomenWatchesPage() {

    this.nav.push(WomenWatchesPage);
   }
   //women jewelry
   getJewelryPage() {

    this.nav.push(JewelryPage);
   }

   goboykidClothingPage() {

    this.nav.push( BoyClothing );
   }

   gogirlkidClothingPage() {

    this.nav.push(GirlClothing);
   }

   goboykidShoesPage() {

    this.nav.push(BoyShoes);
   }


   gogirlkidShoesPage() {

    this.nav.push(GirlShoes);
   }


   getSignupPage() {

    this.nav.push(SignupPage);
   }

   NavPushBabyBoyPage() {

    this.nav.push(BabyBoyClothing);
   }

   
   NavPushBabyGirlPage() {

    this.nav.push( BabyGirlClothing );
   }
}
