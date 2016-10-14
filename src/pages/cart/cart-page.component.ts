import { Component } from '@angular/core';

import { AppActions } from '../../app/app.actions';
import { AppDispatcher } from '../../app/app.dispatcher';
import { CartPageStore } from '../../pages/cart/cart-page.store';
import { ProductInCart } from '../../interfaces/product';

/**
 * カートページのコンポーネント
 * 
 * @export
 * @class CartContainerComponent
 */
@Component({
  selector: 'cart-page',
  templateUrl: 'cart-page.component.html'
})
export class CartPageComponent {

  /**
   * カートに入っている商品の情報
   * 
   * @private
   * @type {ProductInCart[]}
   * @memberOf CartContainerComponent
   */
  public products: ProductInCart[];

  /**
   * カートに入ってる商品の総数
   * 
   * @public
   * @type {string}
   * @memberOf CartContainerComponent
   */
  public total: string;

  /**
   * Creates an instance of CartContainerComponent.
   * 
   * @param {AppActions} actions
   * @param {AppDispatcher} dispatcher
   * @param {CartPageStore} cartStore
   * 
   * @memberOf CartContainerComponent
   */
  constructor(private actions: AppActions,
              private dispatcher: AppDispatcher,
              private cartStore: CartPageStore) {}

  /**
   * 
   * 
   * 
   * @memberOf CartContainerComponent
   */
  public ngOnInit() {
    this.cartStore.getAddedProducts().subscribe((v) => this.products = v);
    this.cartStore.getTotal().subscribe((v) => this.total = v);
  }

  /**
   * 
   * 
   * @param {MouseEvent} ev
   * @returns
   * 
   * @memberOf CartContainerComponent
   */
  public onCheckoutClicked(ev: MouseEvent) {
    if (!this.products.length) {
      return;
    }
    this.dispatcher.emit(this.actions.cartCheckout(this.products));
  }
}
