import { Injectable } from '@angular/core';

import { ProductInStock, ProductInCart } from '../interfaces/product';

const localProducts = [
  {
    'id': 1,
    'title': 'iPad 4 Mini',
    'price': 500.01,
    'inventory': 2,
    'image': './assets/images/ipad-mini.png'
  },
  {
    'id': 2,
    'title': 'H&M T-Shirt White',
    'price': 10.99,
    'inventory': 10,
    'image': './assets/images/t-shirt.png'
  },
  {
    'id': 3,
    'title': 'Charli XCX - Sucker CD',
    'price': 19.99,
    'inventory': 5,
    'image': './assets/images/sucker.png'
  }
];
const TIMEOUT = 100;

/**
 * 店舗APIへの接続(ローカルモック)
 * 
 * @export
 * @class ShopAPI
 */
@Injectable()
export class ShopAPI {

  /**
   * 商品情報取得の実行
   * 
   * @param {number} [timeout]
   * @returns {Promise<ProductInStock[]>}
   * 
   * @memberOf ShopAPI
   */
  public getProducts(timeout?: number): Promise<ProductInStock[]> {
    timeout = timeout || TIMEOUT;
    return new Promise((resolve) => {
      setTimeout(() => resolve(localProducts), timeout);
    });
  }

  /**
   * 商品の購入APIの実行
   * 
   * @param {ProductInCart[]} payload
   * @param {number} [timeout]
   * @returns {Promise<void>}
   * 
   * @memberOf ShopAPI
   */
  public buyProducts(payload: ProductInCart[], timeout?: number): Promise<void> {
    timeout = timeout || TIMEOUT;
    return new Promise((resolve) => {
      setTimeout(() => resolve(), timeout);
    });
  }
}
