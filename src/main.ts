import { combineReducers, createStore } from 'redux';
import { appReducers } from './app/store/reducers';
import {RouterService} from './app/services/router.service';

function main() {
  const reducers = combineReducers(appReducers);
  const store = createStore(reducers);
  const container = document.querySelector("#container")!;
  const navigationLinks = document.getElementsByTagName('nav')[0]
    .getElementsByTagName('A') as HTMLCollectionOf<HTMLAnchorElement>;

  let router = new RouterService(container);
  router.init(navigationLinks);
}

main();
