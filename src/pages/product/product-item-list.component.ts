import { Component, Input } from '@angular/core';

import { Product } from '../../interfaces/product';

/**
 * 商品一覧ページのComponent
 * 
 * @export
 * @class ProductItemListComponent
 */
@Component({
  selector: 'product-item-list',
  templateUrl: 'product-item-list.component.html'
})
export class ProductItemListComponent {
  @Input() products: null | Product[];
}
