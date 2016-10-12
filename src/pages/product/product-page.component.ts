import { Component } from '@angular/core';

import { ProductPageStore } from './product-page.store';
import { Product } from '../../interfaces/product';

/**
 * 
 * 
 * @export
 * @class ProductPageComponent
 */
@Component({
  selector: 'products-page',
  templateUrl: 'product-page.component.html'
})
export class ProductPageComponent {
  /**
   * 
   * 
   * @private
   * @type {Product[]}
   * @memberOf ProductPageComponent
   */
  private products: Product[];

  /**
   * Creates an instance of ProductPageComponent.
   * 
   * @param {ProductPageStore} productStore
   * 
   * @memberOf ProductPageComponent
   */
  constructor(private productStore: ProductPageStore) { };

  /**
   * 
   * 
   * 
   * @memberOf ProductPageComponent
   */
  public ngOnInit() {
    this.productStore.getAllProducts().subscribe((v) => this.products = v);
  }
}
