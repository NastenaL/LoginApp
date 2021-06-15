import { DebounceHelper, EmailComponent, PasswordComponent, SignInButtonComponent, InputValidator, User, RouterService, ProfilePage} from '../pages'; 
import { Path } from '../services';

export class SignInPage {
  private initialState: string = 'Weak';
  private login : string = "";
  private password : string = "";
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
        this.login = document.getElementById('emailInput').value;
        this.password = document.getElementById('passwordInput').value;
        const validator = new InputValidator();

        let isEmailCorrect = validator.checkEmail(this.login);
        let isPasswordCorrect = validator.checkPassword(this.password, document.getElementById('passwordBadge'));

        signInButton.disabled = !(isEmailCorrect && isPasswordCorrect[1]);
      });
    });

    signInButton.addEventListener('click', (event )=>{
      event.preventDefault();

      let r : User = {
        id: '1',
        login: 'jkdnvsdkv@jfkvn.ee',
        password: 'Qwerrty123`',
        fullName: 'Test'
      }; 

      this.users.push(r);

      const user : User | undefined = this.users.find(item => {
        item.login === this.login && item.password == this.password 
        return item;
      });

      if(user === undefined){
        alert("User does not exist");
      }
      else{
        const router = new RouterService();
        router.renderLocation(Path.Profile);
        window.location.hash = '/' + user!.id + Path.Profile;
      }
    });

    [emailDiv, passwordDiv, signInButton].forEach(item => form.appendChild(item));
    return form;
  }
}
