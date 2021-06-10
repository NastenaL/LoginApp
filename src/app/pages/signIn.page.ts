import { DebounceHelper, InputValidator, EmailComponent, PasswordComponent } from '../pages'; 

// TODO: Split components into pages / components
export class SignInComponent {
  private readonly form: HTMLFormElement;
  private initialState: string = 'Weak';

  constructor() {
    this.form = document.createElement('form');
  }

  public render(): DocumentFragment {
    const fragment = document.createDocumentFragment();
    // TODO: Put form creation logic into one separate method
    this.form.id = 'signInForm';
    const emailDiv = EmailComponent.create();
    const passwordDiv = PasswordComponent.create(this.initialState);
    
    this.createSignInButton();
    [emailDiv, passwordDiv].forEach(item => fragment.appendChild(item));
    
    return fragment;
  }

  private createSignInButton(): void {
    const signInButton = document.createElement('button');
    signInButton.type = 'submit';
    signInButton.textContent = 'Sign in';

    this.form.appendChild(signInButton);
  }
}
