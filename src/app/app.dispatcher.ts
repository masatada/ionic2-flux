import { Injectable } from '@angular/core';
import { Dispatcher } from 'walts';

import { AppState } from '../app/app.store';

/**
 * ApplicationのDispatcher
 * 
 * @export
 * @class AppDispatcher
 * @extends {Dispatcher<AppState>}
 */
@Injectable()
export class AppDispatcher extends Dispatcher<AppState> {
}
