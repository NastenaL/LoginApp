import {debounce} from 'lodash'
const DEBOUNCE_TIME: number = 1000;

export class DebounceHelper {
  // TODO: Add response type
  // TODO: Check debounce from lodash
  public delay(fn: Function) {
    return debounce(fn, DEBOUNCE_TIME); 
  }
}
