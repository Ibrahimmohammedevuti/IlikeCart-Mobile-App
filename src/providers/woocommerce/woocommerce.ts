
import { Injectable } from '@angular/core';
import * as WC from 'woocommerce-api'
/*
  Generated class for the WoocommerceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WoocommerceProvider {

  Woocommerce: any;
  WoocommerceV2: any;

  constructor() {
    this.Woocommerce = WC({
      url: "http://ilikecart.com",
      consumerKey: "ck_fa8919d8e87b2ee6801b1a5cba059d8854e1b3d5",
      consumerSecret: "cs_05876ed864a25dc4af04d41281480bdd20b5df9b",
      //verifySsl: false,
      //queryStringAuth: true
    });

    this.WoocommerceV2 = WC({
      url: "http://ilikecart.com",
      consumerKey: "ck_fa8919d8e87b2ee6801b1a5cba059d8854e1b3d5",
      consumerSecret: "cs_05876ed864a25dc4af04d41281480bdd20b5df9b",
      wpAPI: true,
      version: "wc/v2",
      verifySsl: false,
      queryStringAuth: true
    });
  }

  init(v2?: boolean){
    if(v2 == true){
      return this.WoocommerceV2;
    } else {
      return this.Woocommerce;
    }
  }

}