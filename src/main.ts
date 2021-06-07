import { combineReducers, createStore } from 'redux';
import { appReducers } from './app/store/reducers';
import {RouterService} from './app/service/routerService';

function main() {
  const reducers = combineReducers(appReducers);
  const store = createStore(reducers);
  const container = document.querySelector("#app")!;
  const navigation = document.getElementsByTagName("a");
  
  let router = new RouterService(container);
  router.init(navigation);
}

main();
