import {SignInPage, Path, ProfilePage, SignUpPage} from '../services/index'

export class RouterService {

  public init(navigation: HTMLCollectionOf<HTMLAnchorElement>) : void{
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

  public renderLocation(location: string) : void {
    const container = document.getElementById("container")!;
    container.innerHTML = '';

    const signIn: SignInPage = new SignInPage();
    const profile: ProfilePage = new ProfilePage();
    const signUp: SignUpPage = new SignUpPage();

    console.log(location);
    switch (location) {
      case Path.SignUp:
        container.append(signUp.render());
        break;
      case Path.Home:
      case Path.SignIn:
        container.append(signIn.render());
        break;
      case Path.Dashboard:
        container.innerHTML = `<h1>${location}</h1>`;
        break;
      case Path.ResetPassword:
        container.innerHTML = `<h1>${location}</h1>`;
        break;
      case Path.Profile:
        container.append(profile.render());
        break;
      default: {
        // TODO: Redirect instead of rendering default template
        container.append(signIn.render());
        break;
      }
    }
  }
}
