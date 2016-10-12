import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { TabsPageComponent } from '../pages/tabs/tabs-page.component';
import { AppActions } from '../app/app.actions';
import { AppDispatcher } from '../app/app.dispatcher';

/**
 * アプリのROOTとなるcomponentクラス
 * 
 * @export
 * @class MyApp
 */
@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {

  /**
   * タブページ
   * 
   * @memberOf MyApp
   */
  public rootPage = TabsPageComponent;

  /**
   * Creates an instance of MyApp.
   * 
   * @param {Platform} platform
   * @param {AppActions} actions
   * @param {AppDispatcher} dispatcher
   * 
   * @memberOf MyApp
   */
  constructor(
    public platform: Platform,
    private actions: AppActions,
    private dispatcher: AppDispatcher) {

    platform.ready().then(() => {
      this.dispatcher.emit(this.actions.fetchAllProducts());
      StatusBar.styleDefault();
    });

  }
}
