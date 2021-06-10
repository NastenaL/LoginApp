// TODO: Use barrel index.ts instead
import { SignInComponent } from '../components/signIn.component';
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
    // Remove this.container from SignInComponent and other component constructors
    const signIn: SignInComponent = new SignInComponent(this.container);
    switch (location) {
      case Path.signUp:
        this.container.innerHTML = `<h1>${location}</h1>`;
        break;
      case Path.signIn:
        signIn.render();
        break;
      case Path.home:
        this.container.innerHTML = `<h1>${location}</h1>`;
        break;
      default: {
        // TODO: Redirect instead of rendering default template
        signIn.render();
        break;
      }
    }
  }
}
