
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
      consumerKey: "ck_5a8447fef9671f1a47e07b3171bc9fa54578942c",
      consumerSecret: "cs_008af6bf98f73cfa43ac533d2b761d53cecfc9c4"
    });

    this.WoocommerceV2 = WC({
      url: "http://ilikecart.com",
      consumerKey: "ck_5a8447fef9671f1a47e07b3171bc9fa54578942c",
      consumerSecret: "cs_008af6bf98f73cfa43ac533d2b761d53cecfc9c4",
      wpAPI: true,
      version: "wc/v2"
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