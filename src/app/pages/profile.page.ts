export class ProfilePage {
    
    public render(): DocumentFragment {
        const fragment = document.createDocumentFragment();
        const title = document.createElement('h3');
        title.textContent = 'LoginApp';

        fragment.appendChild(title);
        return fragment;
      }
}