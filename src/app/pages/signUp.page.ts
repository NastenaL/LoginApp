import { DbService, FirstNameComponent, LastNameComponent, SignUpButtonComponent, EmailComponent, AgeComponent, PasswordComponent, ConfirmPasswordComponent} from '../pages'; 
import { UserActions } from '../store/actions/user.actions';
import {User} from '../type/user.type'

export class SignUpPage {
  private initialState: string = 'Weak';
  private newUser : User| undefined = undefined;
    
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
    const age = AgeComponent.create();
    const password = PasswordComponent.create(this.initialState);
    const confirmPassword = ConfirmPasswordComponent.create(this.initialState);

    signUpButton.addEventListener('click', () =>{
      const db = new DbService();
      db.createUser(this.newUser);
    });

    [firstName, lastName, email, age, password, confirmPassword, signUpButton].forEach(item => form.appendChild(item));
    return form;
  }
}