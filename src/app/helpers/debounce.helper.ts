import {debounce} from 'lodash'
const DEBOUNCE_TIME: number = 1000;

function debounceHelper(fn : Function) : void {
  debounce(function(){
    fn();
  }, DEBOUNCE_TIME); 
}


