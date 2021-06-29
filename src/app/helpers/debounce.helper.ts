import {debounce} from 'lodash'
// TODO: Move into constants
const DEBOUNCE_TIME: number = 1000;

// TODO: Remove unused code
function debounceHelper(fn : Function) : void {
  debounce(function(){
    fn();
  }, DEBOUNCE_TIME); 
}


