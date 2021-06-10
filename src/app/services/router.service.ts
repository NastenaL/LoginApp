// TODO: Use barrel index.ts instead
import { SignInComponent } from '../pages/signIn.page';
import { Path } from '../enums/path.enum';

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

  private renderLocation(location: string) {
    this.container.innerHTML = '';
    // Remove this.container from SignInComponent and other component constructors
    const signIn: SignInComponent = new SignInComponent();
    switch (location) {
      case Path.SignUp:
        this.container.innerHTML = `<h1>${location}</h1>`;
        break;
      case Path.SignIn:
        signIn.render();
        break;
      case Path.Home:
        this.container.innerHTML = `<h1>${location}</h1>`;
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
