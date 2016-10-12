import { Injectable } from '@angular/core';

import { ShopAPI } from '../services/shop-api.service';
import { ProductInStock, ProductInCart } from '../interfaces/product';

/**
 * 
 * 
 * @export
 * @class WebAPIUtils
 */
@Injectable()
export class WebAPIUtils {

  /**
   * Creates an instance of WebAPIUtils.
   * 
   * @param {ShopAPI} shop
   * 
   * @memberOf WebAPIUtils
   */
  constructor(private shop: ShopAPI) {}

  /**
   * 全商品の取得
   * 
   * @returns {Promise<ProductInStock[]>}
   * 
   * @memberOf WebAPIUtils
   */
  public getAllProducts(): Promise<ProductInStock[]> {
    return this.shop.getProducts();
  }

  /**
   * 商品の決済
   * 
   * @param {ProductInCart[]} products
   * @returns {Promise<void>}
   * 
   * @memberOf WebAPIUtils
   */
  public checkoutProducts(products: ProductInCart[]): Promise<void> {
    return this.shop.buyProducts(products);
  }
}
