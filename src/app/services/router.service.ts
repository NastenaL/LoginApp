import {SignInPage, Path} from '../services/index'

export class RouterService {
  // TODO: Remove container and reverse dependency
  constructor(public container: Element) {
    this.container = container;
  }

  // TODO: Add response type
  public init(navigation: HTMLCollectionOf<HTMLAnchorElement>) {
    this.responseType();

    Array.from(navigation).forEach((item) => {
      item.addEventListener('click', () => {
        this.renderLocation(item.hash.slice(0, -1));
      });
    });
  }

  private responseType() {
    window.addEventListener('load', () => {
      const location = window.location.hash;
      if (location) {
        this.renderLocation(location);
      }
    });
  }

  private renderLocation(location: string) : void {
    this.container.innerHTML = '';
    const signIn: SignInPage = new SignInPage();

    switch (location) {
      case Path.SignUp:
        this.container.innerHTML = `<h1>${location}</h1>`;
        break;
      case Path.Home:
      case Path.SignIn:
        this.container.append(signIn.render());
        break;
      case Path.Dashboard:
        this.container.innerHTML = `<h1>${location}</h1>`;
        break;
      case Path.ResetPassword:
        this.container.innerHTML = `<h1>${location}</h1>`;
        break;
      default: {
        // TODO: Redirect instead of rendering default template
        this.container.append(signIn.render());
        break;
      }
    }
  }
}
