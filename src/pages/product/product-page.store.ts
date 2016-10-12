import { Injectable, Input } from '@angular/core';
import { App } from 'ionic-angular';

import { Observable } from 'rxjs';

import { AppStore } from '../../app/app.store';
import { Product } from '../../interfaces/product';

/**
 * 商品ページのStore
 * 
 * @export
 * @class ProductPageStore
 */
@Injectable()
export class ProductPageStore {

  /**
   * Creates an instance of ProductPageStore.
   * 
   * @param {AppStore} store
   * 
   * @memberOf ProductPageStore
   */
  constructor(
    protected store: AppStore,
    public app: App
  ) { }

  /**
   * ionicのView描画ライフサイクル
   * 
   * 
   * @memberOf ProductPageStore
   */
  public ionViewDidEnter(): void {
    this.app.setTitle('Product');
  }

  /**
   * 商品全取得
   * 
   * @returns {Observable<Product[]>}
   * 
   * @memberOf ProductPageStore
   */
  public getAllProducts(): Observable<Product[]> {
    return this.store.observable.map((state) => {
      return state.products;
    });
  }
}
