import { DebounceHelper, EmailComponent, PasswordComponent, SignInButtonComponent, InputValidator, User} from '../pages'; 

export class SignInPage {
  private initialState: string = 'Weak';
private users: Array<User> = new Array<User>();

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

    [emailDiv, passwordDiv].forEach(item =>{
      item.addEventListener('input',()=>{
        const loginValue = document.getElementById('emailInput').value;
        const passwordValue = document.getElementById('passwordInput').value;
        const validator = new InputValidator();

        let isEmailCorrect = validator.checkEmail(loginValue);
        let isPasswordCorrect = validator.checkPassword(passwordValue, document.getElementById('passwordBadge'));
        console.log(isEmailCorrect);
        if(isEmailCorrect && isPasswordCorrect[1]){
          signInButton.disabled = false;
        }
      });
    });

    signInButton.addEventListener('click', ()=>{
      
    });

    [emailDiv, passwordDiv, signInButton].forEach(item => form.appendChild(item));
    return form;
  }
}
