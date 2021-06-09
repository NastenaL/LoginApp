import { combineReducers, createStore } from 'redux';
import { appReducers } from './app/store/reducers';
import { RouterService } from './app/services/router.service';
import { SideMenuHelper} from './app/helpers/sideMenu.helper';

function main() {
  const reducers = combineReducers(appReducers);
  const store = createStore(reducers);
  const container = document.getElementById("container")!;
  const navigationLinks = document.getElementsByTagName('nav')[0]
    .getElementsByTagName('A') as HTMLCollectionOf<HTMLAnchorElement>;

  let router = new RouterService(container);
  router.init(navigationLinks);

  const sideMenu = document.getElementById("sideMenu")!;
  const openButton = document.getElementById("openButton")!;
  const closeButton = document.getElementById("closeButton")!;
  let sideMenuHelper = new SideMenuHelper(sideMenu);

  openButton.addEventListener('click', () =>{
    sideMenuHelper.openNav();
  });
  closeButton.addEventListener('click', () =>{
    sideMenuHelper.closeNav();
  });
}

main();
