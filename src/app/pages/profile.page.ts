import {User, DbService} from '../pages/index'

export class ProfilePage {
  private user : User |undefined = undefined;
  
  constructor(){
    const db = new DbService();

    db.getUserById(1).then(result => {
      this.user = result;
      console.log(this.user);
    });
  }

  public render(): DocumentFragment {
    const fragment = document.createDocumentFragment();
    const title = document.createElement('h3');
    title.textContent = 'LoginApp';
    const fullName = document.createElement('h5');
    fullName.textContent = `${this.user?.firstName} ${this.user?.firstName}`;
    [title, fullName].forEach(item => fragment.appendChild(item));

    return fragment;
  }
}