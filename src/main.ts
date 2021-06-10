import { combineReducers, createStore } from 'redux';
import { SideMenuHelper } from './app/helpers/sideMenu.helper';
import { RouterService } from './app/services/router.service';
import { appReducers } from './app/store/reducers';

function main() {
  const reducers = combineReducers(appReducers);
  // TODO: Remove obsolete code
  const store = createStore(reducers);
  const container = document.getElementById('container')!;
  // TODO: Replace by querySelectorAll and specific css selector
  const navigationLinks = document.getElementsByTagName('nav')[0].getElementsByTagName('A') as HTMLCollectionOf<HTMLAnchorElement>;

  // TODO: Use const
  let router = new RouterService(container);
  router.init(navigationLinks);

  // TODO: Move into component
  const sideMenu = document.getElementById('sideMenu')!;
  const openButton = document.getElementById('openButton')!;
  const closeButton = document.getElementById('closeButton')!;
  // TODO: Use const
  let sideMenuHelper = new SideMenuHelper(sideMenu);

  // TODO: Move into separate file
  openButton.addEventListener('click', () => {
    sideMenuHelper.openNav();
  });
  closeButton.addEventListener('click', () => {
    sideMenuHelper.closeNav();
  });
}

main();
