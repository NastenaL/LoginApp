import { DbService, FirstNameComponent, LastNameComponent, SignUpButtonComponent, EmailComponent, PasswordComponent, ConfirmPasswordComponent} from '../pages'; 

export class SignUpPage {
    private initialState: string = 'Weak';

    constructor(){
        let db = new DbService();
    
          db.renderUsers().then(result => {
          //  this.users = Array<User>(result);
          });
      }
    
      public render(): DocumentFragment {
        const fragment = document.createDocumentFragment();
        const form = this.createForm();
        
        fragment.appendChild(form);
        return fragment;
      }  
      
      private createForm(): HTMLFormElement{
        const form = document.createElement('form');
        form.id = 'signUpForm';
    
        const firstName = FirstNameComponent.create();
        const lastName = LastNameComponent.create();
        const email = EmailComponent.create();
        const signUpButton = SignUpButtonComponent.create();
        const password = PasswordComponent.create(this.initialState);
        const confirmPassword = ConfirmPasswordComponent.create(this.initialState);

        [firstName, lastName, email, password, confirmPassword, signUpButton].forEach(item => form.appendChild(item));
        return form;
      }
}