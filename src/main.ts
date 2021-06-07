import { combineReducers, createStore } from 'redux';
import { appReducers } from './app/store/reducers';
import {RouterService1} from './app/service/routerService';

function main() {
  const reducers = combineReducers(appReducers);
  const store = createStore(reducers);
  const container = document.querySelector("#app")!;

  let router = new RouterService1(container);

  window.addEventListener('load', () => {
  const location = window.location.hash;
  if(location){
    router.locationResolver(location);
    }
  });

  const navigation = document.getElementsByTagName("a");
          
  [...navigation].forEach(item => {
    item.addEventListener('click', ()=>{
    router.locationResolver(item.hash);
    });
  });     
}

main();
