import { combineReducers, createStore } from 'redux';
import { appReducers } from './app/store/reducers';
import { RouterService } from './app/services/router.service';
import { SideMenuHelper} from './app/helpers/sideMenu.helper';
import { SignInPage} from './app/pages/signIn.page';

function main() {
  const reducers = combineReducers(appReducers);
  const store = createStore(reducers);
  const container = document.getElementById("container")!;
  const navigationLinks = document.getElementsByTagName('nav')[0]
    .getElementsByTagName('A') as HTMLCollectionOf<HTMLAnchorElement>;

  const router = new RouterService();
  router.init(navigationLinks);

  const sideMenuHelper = new SideMenuHelper();
  sideMenuHelper.init();

  const signIn: SignInPage = new SignInPage();
  container.append(signIn.render());
}

main();
