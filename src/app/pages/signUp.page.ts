import { DbService, FirstNameComponentFactory, LastNameComponentFactory, SignUpButtonComponentFactory, EmailComponentFactory, AgeComponentFactory, PasswordComponentFactory, ConfirmPasswordComponentFactory} from '../pages'; 

export class SignUpPage {
  // TODO: Rename according to actual value usage
  private initialState: string = 'Weak';
  // TODO: Check if we can remove this property and use value directly
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
    
    const firstName = FirstNameComponentFactory.create();
    const lastName = LastNameComponentFactory.create();
    const email = EmailComponentFactory.create();
    const signUpButton = SignUpButtonComponentFactory.create();
    const age = AgeComponentFactory.create();
    const password = PasswordComponentFactory.create(this.initialState);
    const confirmPassword = ConfirmPasswordComponentFactory.create(this.initialState);

    signUpButton.addEventListener('click', () =>{
      this.newUser = this.setUser();

      // TODO: Make DbService singleton service
      const db = new DbService();
      db.createUser(this.newUser);
    });

    [firstName, lastName, email, age, password, confirmPassword, signUpButton].forEach(item => form.appendChild(item));
    return form;
  }

  // TODO: Check and Remove this method. ideally this should return void since we change property at the context
  private setUser(): User{
    return this.newUser = {
      // TODO: Looks like we could wrap this logic into separate function, where we can find element by id and return value property
      firstName: document.getElementById('firstNameInput')!.value,
      lastName: document.getElementById('lastNameInput')!.value,
      age: document.getElementById('ageInput')!.value,
      // TODO: Rename to email instead of login
      login: document.getElementById('emailInput')!.value,
      password: document.getElementById('passwordInput')!.value
    };
  }
}