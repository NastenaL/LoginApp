import { PasswordState } from '..';

export class PasswordToggleButtonFactory{
    public static create(passwordInput: HTMLInputElement) : HTMLButtonElement {
        const showButton = document.createElement('button');
        showButton.textContent = 'Show';

        showButton.addEventListener('click', (event) => {
          event.preventDefault();
          const newState : PasswordState = this.togglePassword(passwordInput.type);
          showButton.textContent = newState.title;
          passwordInput.type = newState.type;
        });
        return showButton;
    }

    private togglePassword(buttonType:string) : PasswordState {
        const newState : PasswordState = {type: "", title: ""};
        if (buttonType === 'password') {
          newState.title = 'Hide';
          newState.type = 'text';
        } else {
          newState.title = 'Show';
          newState.type = 'password';
        }
        return newState;
    }
}