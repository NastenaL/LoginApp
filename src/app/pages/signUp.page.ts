import { DbService, InputValidator, User, RouterService, ProfilePage, FirstNameComponent} from '../pages'; 
import { Path } from '../services';

export class SignUpPage {

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
    
        [firstName].forEach(item => form.appendChild(item));
        return form;
      }
}