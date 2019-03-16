import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, ToastController, NavParams } from 'ionic-angular';


import { WoocommerceProvider } from "../../providers/woocommerce/woocommerce"
import { ProductDetails } from '../product-details/product-details';

/**
 * Generated class for the GamingPcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-gaming-pc',
  
  templateUrl: 'gaming-pc.html',
})
export class GamingPcPage {
  WooCommerce: any;
  products: any[];
  moreProducts: any[];
  page: number;
  category: any;

 
  @ViewChild('productSlides') productSlides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private WP: WoocommerceProvider) {

    this.page = 1;
    this.category = this.navParams.get("category");


    this.WooCommerce = WP.init();

    this.loadMoreProducts(null);

    this.WooCommerce.getAsync("products?filter[category]=gamming-laptops-computers").then( (data) => {
      console.log(JSON.parse(data.body));
      this.products = JSON.parse(data.body).products;
    }, (err) => {
      console.log(err)
    })

    }
  


ionViewDidLoad(){
     setInterval(()=> {

       if(this.productSlides.getActiveIndex() == this.productSlides.length() -1)
         this.productSlides.slideTo(0);

       this.productSlides.slideNext();
     }, 3000)
  }


 loadMoreProducts(event){
  console.log(event);
  if(event == null)
  {
    this.page = 1;
    this.moreProducts = [];
  }
  else
    this.page++;

  this.WooCommerce.getAsync("products?filter[category]=gamming-laptops-computers" + "&page=" + 
  this.page).then((data) => {
    console.log(JSON.parse(data.body));
    this.moreProducts = this.moreProducts.concat(JSON.parse(data.body).products);

    if(event != null)
    {
      event.complete();
    }

    if(JSON.parse(data.body).products.length < 10){
      event.enable(false);

      this.toastCtrl.create({
        message: "No more products!",
        duration: 5000
      }).present();

    }


  }, (err) => {
    console.log(err)
  })
}

openProductPage(product){
  
 this.navCtrl.push( ProductDetails, {"product": product} );
 }
}