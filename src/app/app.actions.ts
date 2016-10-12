import { Injectable } from '@angular/core';
import { Actions, Action } from 'walts';

import { AppState } from '../app/app.store';
import { WebAPIUtils } from '../services/web-api.service';
import { ProductInCart, Product } from '../interfaces/product';

/**
 * 
 * 
 * @export
 * @class AppActions
 * @extends {Actions<AppState>}
 */
@Injectable()
export class AppActions extends Actions<AppState> {

  /**
   * Creates an instance of AppActions.
   * 
   * @param {WebAPIUtils} api
   * 
   * @memberOf AppActions
   */
  constructor(private api: WebAPIUtils) {
    super();
  }

  /**
   * 
   * 
   * @returns {Action<AppState>}
   * 
   * @memberOf AppActions
   */
  public fetchAllProducts(): Action<AppState> {
    return (state) => {
      return this.delayed((apply) => {
        this.api.getAllProducts().then((products) => {
          apply((state) => ({
            products
          }));
        });
      });
    };
  }

  /**
   * 
   * 
   * @param {Product} product
   * @returns {Action<AppState>}
   * 
   * @memberOf AppActions
   */
  public addToCart(product: Product): Action<AppState> {
    return (state) => {
      const id = product.id;

      const target = state.products.find((p) => p.id === id);
      target.inventory = target.inventory > 0
        ? target.inventory - 1
        : 0;

      const localProduct = product as ProductInCart;
      localProduct.quantity = id in state.cart
        ? state.cart[id].quantity + 1
        : 1;

      state.cart[id] = Object.assign({}, localProduct);

      return state;
    };
  }

  /**
   * 
   * 
   * @param {ProductInCart[]} products
   * @returns {Action<AppState>[]}
   * 
   * @memberOf AppActions
   */
  public cartCheckout(products: ProductInCart[]): Action<AppState>[] {
    return this.combine(
      (state) => {
        return {
          cart: {}
        } as AppState;
      },
      (state) => {
        return this.delayed((apply) => {
          this.api.checkoutProducts(products).then(() => {
            apply(this.finishCheckout(products));
          });
        });
      }
    );
  }

  /**
   * 
   * 
   * @param {ProductInCart[]} products
   * @returns {Action<AppState>}
   * 
   * @memberOf AppActions
   */
  public finishCheckout(products: ProductInCart[]): Action<AppState> {
    return (state) => {
      console.log('YOU BOUGHT:', products);
      return state;
    };
  }

}
