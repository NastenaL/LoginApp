import { DbService, EmailComponentFactory, PasswordComponentFactory, SignInButtonComponentFactory, InputValidator, User, RouterService, Path, UserActions} from '../pages'; 

export class SignInPage {
  private initialState: string = 'Weak';
  private login : string = "";
  private password : string = "";
  private users: User[] = [];

  #store = null;

  constructor(store){
    this.getUserList();
    this.#store = store;
  }

  public render(): DocumentFragment {
    const fragment = document.createDocumentFragment();
    const form = this.createForm();
    
    fragment.appendChild(form);
    return fragment;
  }

  private createForm(): HTMLFormElement{
    const form = document.createElement('form');
    form.id = 'signInForm';

    const emailDiv = EmailComponentFactory.create();
    const passwordDiv = PasswordComponentFactory.create(this.initialState);
    const signInButton = SignInButtonComponentFactory.create();

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
        this.#store.dispatch(UserActions.signIneUser);
      }
    });

    [emailDiv, passwordDiv, signInButton].forEach(item => form.appendChild(item));
    return form;
  }

  private getUserList(){
    const db = new DbService();

    db.getUsers().then(result => {
      this.users = (result) as User[];
    });
  }
}
