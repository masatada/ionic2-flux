import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AppStore } from '../../app/app.store';
import { ProductInCart } from '../../interfaces/product';

/**
 * カートのStore
 * 
 * @export
 * @class CartPageStore
 */
@Injectable()
export class CartPageStore {

  /**
   * Creates an instance of CartPageStore.
   * 
   * @param {AppStore} store
   * 
   * @memberOf CartPageStore
   */
  constructor(protected store: AppStore) { }

  /**
   * カートへの商品追加
   * 
   * @returns {Observable<ProductInCart[]>}
   * 
   * @memberOf CartPageStore
   */
  public getAddedProducts(): Observable<ProductInCart[]> {
    return this.store.observable.map((state) => {
      return Object.keys(state.cart).map((id) => {
        return state.cart[id];
      });
    });
  }

  /**
   * カートへ入れている商品のトータル数を取得
   * 
   * @returns {Observable<string>}
   * 
   * @memberOf CartPageStore
   */
  public getTotal(): Observable<string> {
    return this.store.observable.map((state) => {
      return Object.keys(state.cart).reduce((total, id) => {
        const product = state.cart[id];
        total += product.price * product.quantity;
        return total;
      }, 0).toFixed(2);
    });
  }
}
