import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToastController } from 'ionic-angular';

import { ProductInCart } from '../../interfaces/product';

/**
 * カートページのcomponent
 * 
 * @export
 * @class CartItemComponent
 */
@Component({
  selector: 'cart-item',
  templateUrl: 'cart-item.component.html'
})
export class CartItemComponent {

  @Input() public products: null | ProductInCart[];
  @Input() public total: string;
  @Output() public checkoutClicked = new EventEmitter<any>();

  public hasProducts: boolean;

  /**
   * Creates an instance of CartItemComponent.
   * 
   * @param {ToastController} toastCtrl
   * 
   * @memberOf CartItemComponent
   */
  constructor(private toastCtrl: ToastController) { };

  /**
   * コンポーネントのonCHangeObserver
   * 
   * 
   * @memberOf CartItemComponent
   */
  public ngOnChanges(changes) {
    if (!this.products) {
      return;
    }
    this.hasProducts = this.products.length > 0;
  }

  /**
   * コンポーネントのonClickObserver
   * 
   * @param {MouseEvent} ev
   * 
   * @memberOf CartItemComponent
   */
  public onClick(ev: MouseEvent) {

    let toast = this.toastCtrl.create({
      message: 'checkout.' ,
      duration: 1000
    });
    toast.present();

    this.checkoutClicked.emit(ev);
  }
}
