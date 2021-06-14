import { DebounceHelper, EmailComponent, PasswordComponent, SignInButtonComponent} from '../pages'; 

export class SignInPage {
  private initialState: string = 'Weak';

  public render(): DocumentFragment {
    const fragment = document.createDocumentFragment();
    const form = this.createForm();
    
    fragment.appendChild(form);
    return fragment;
  }

  private createForm(): HTMLFormElement{
    const form = document.createElement('form');
    form.id = 'signInForm';

    const emailDiv = EmailComponent.create();
    const passwordDiv = PasswordComponent.create(this.initialState);
    const signInButton = SignInButtonComponent.create();
    signInButton.addEventListener('click', ()=>{
      const loginValue = document.getElementById('emailInput').value;
      const passwordValue = document.getElementById('passwordInput').value;
    });

    [emailDiv, passwordDiv, signInButton].forEach(item => form.appendChild(item));
    return form;
  }
}
