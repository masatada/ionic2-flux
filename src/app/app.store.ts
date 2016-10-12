import { Injectable } from '@angular/core';
import { State, Store } from 'walts';

import { AppDispatcher } from '../app/app.dispatcher';
import { ProductInStock, ProductInCart } from '../interfaces/product';

/**
 * アプリケーションのState定義
 * 
 * @export
 * @class AppState
 * @extends {State}
 */
export class AppState extends State {
  public products?: ProductInStock[];
  public cart?: {
    [id: string]: ProductInCart
  };
}

/**
 * Applicationの初期State
 */
const INIT_STATE: AppState = {
  products: [],
  cart: {}
};

/**
 * アプリ全体のStore 
 * 
 * @export
 * @class AppStore
 * @extends {Store<AppState>}
 */
@Injectable()
export class AppStore extends Store<AppState> {
  /**
   * Creates an instance of AppStore.
   * 
   * @param {AppDispatcher} dispatcher
   * 
   * @memberOf AppStore
   */
  constructor(protected dispatcher: AppDispatcher) {
    super(INIT_STATE, dispatcher);
  }
}
