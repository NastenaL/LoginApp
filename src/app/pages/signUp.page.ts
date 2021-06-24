import { DbService, FirstNameComponentFactory, LastNameComponentFactory, SignUpButtonComponentFactory, EmailComponentFactory, AgeComponentFactory, PasswordComponentFactory, ConfirmPasswordComponentFactory} from '../pages'; 

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
    
    const firstName = FirstNameComponentFactory.create();
    const lastName = LastNameComponentFactory.create();
    const email = EmailComponentFactory.create();
    const signUpButton = SignUpButtonComponentFactory.create();
    const age = AgeComponentFactory.create();
    const password = PasswordComponentFactory.create(this.initialState);
    const confirmPassword = ConfirmPasswordComponentFactory.create(this.initialState);

    signUpButton.addEventListener('click', () =>{
      this.newUser = this.setUser();

      const db = new DbService();
      db.createUser(this.newUser);
    });

    [firstName, lastName, email, age, password, confirmPassword, signUpButton].forEach(item => form.appendChild(item));
    return form;
  }

  private setUser(): User{
    return this.newUser = {
      firstName: document.getElementById('firstNameInput')!.value,
      lastName: document.getElementById('lastNameInput')!.value,
      age: document.getElementById('ageInput')!.value,
      login: document.getElementById('emailInput')!.value,
      password: document.getElementById('passwordInput')!.value
    };
  }
}