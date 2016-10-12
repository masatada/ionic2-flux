import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from '../app/app.component';

import { TabsPageComponent } from '../pages/tabs/tabs-page.component';
import { ProductPageComponent } from '../pages/product/product-page.component';
import { ProductItemListComponent } from '../pages/product/product-item-list.component';
import { ProductItemComponent } from '../pages/product/product-item.component';
import { ProductItemContainerComponent } from './../pages/product/product-item-container.component';
import { CartPageComponent } from '../pages/cart/cart-page.component';
import { CartItemComponent } from '../pages/cart/cart-item.component';

import { AppActions } from '../app/app.actions';
import { AppDispatcher } from '../app/app.dispatcher';
import { AppStore } from '../app/app.store';
import { CartPageStore } from '../pages/cart/cart-page.store';
import { ProductPageStore } from '../pages/product/product-page.store';

import { ShopAPI } from '../services/shop-api.service';
import { WebAPIUtils } from '../services/web-api.service';


/**
 * ApplicationのNgModule定義
 * 
 * @export
 * @class AppModule
 */
@NgModule({
  declarations: [
    MyApp,
    ProductItemComponent,
    ProductItemListComponent,
    ProductItemContainerComponent,
    ProductPageComponent,
    CartItemComponent,
    CartPageComponent,
    TabsPageComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProductItemComponent,
    ProductItemListComponent,
    ProductItemContainerComponent,
    ProductPageComponent,
    CartItemComponent,
    CartPageComponent,
    TabsPageComponent,
  ],
  providers: [
    AppActions,
    AppDispatcher,
    AppStore,
    CartPageStore,
    ProductPageStore,
    WebAPIUtils,
    ShopAPI
  ]
})
export class AppModule {}
