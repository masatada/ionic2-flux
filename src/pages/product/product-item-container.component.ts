import { Component, Input } from '@angular/core';

import { AppActions } from '../../app/app.actions';
import { AppDispatcher } from '../../app/app.dispatcher';
import { Product } from '../../interfaces/product';

/**
 * 
 * 
 * @export
 * @class ProductItemContainerComponent
 */
@Component({
  selector: 'product-item-container',
  templateUrl: 'product-item-container.component.html'
})
export class ProductItemContainerComponent {

  @Input() key: number;
  @Input() product: null | Product;

  /**
   * Creates an instance of ProductItemContainerComponent.
   * 
   * @param {AppActions} actions
   * @param {AppDispatcher} dispatcher
   * 
   * @memberOf ProductItemContainerComponent
   */
  constructor(private actions: AppActions,
              private dispatcher: AppDispatcher) {}

  /**
   * Add to cartが押された際のObserver
   * 
   * 
   * @memberOf ProductItemContainerComponent
   */
  public onAddToCartClicked() {
    this.dispatcher.emit(this.actions.addToCart(this.product));
  }
}
