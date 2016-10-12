import { Component } from '@angular/core';

import { CartPageComponent } from '../../pages/cart/cart-page.component';
import { ProductPageComponent } from '../../pages/product/product-page.component';

/**
 * 
 * 
 * @export
 * @class TabsPageComponent
 */
@Component({
  templateUrl: 'tabs-page.component.html'
})
export class TabsPageComponent {

  /**
   * 
   * 
   * @type {*}
   * @memberOf TabsPageComponent
   */
  public tab1Root: any = ProductPageComponent;

  /**
   * 
   * 
   * @type {*}
   * @memberOf TabsPageComponent
   */
  public tab2Root: any = CartPageComponent;

  /**
   * Creates an instance of TabsPageComponent.
   * 
   * 
   * @memberOf TabsPageComponent
   */
  constructor() {
    //
  }

}
