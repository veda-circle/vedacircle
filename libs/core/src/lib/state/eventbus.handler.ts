import { Actions, ofActionSuccessful, Store } from '@ngxs/store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventBusHandler {
  constructor(private actions$: Actions, private store: Store) {

  }
}
