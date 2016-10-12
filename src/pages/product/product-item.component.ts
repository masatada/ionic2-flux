import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToastController } from 'ionic-angular';

import { Product } from '../../interfaces/product';

/**
 * 商品1アイテムのコンポーネント
 * 
 * @export
 * @class ProductItemComponent
 */
@Component({
  selector: 'product-item',
  templateUrl: 'product-item.component.html'
})
export class ProductItemComponent {
  @Input() product: null | Product;
  @Output() addToCartClicked = new EventEmitter<void>();

  /**
   * Creates an instance of ProductItemComponent.
   * 
   * @param {ToastController} toastCtrl
   * 
   * @memberOf ProductItemComponent
   */
  constructor(private toastCtrl: ToastController) { };

  /**
   * 
   * 
   * 
   * @memberOf ProductItemComponent
   */
  public onClick() {

    let toast = this.toastCtrl.create({
      message: this.product.title + ' add in cart.' ,
      duration: 1000
    });
    toast.present();

    this.addToCartClicked.emit();
  }
}
