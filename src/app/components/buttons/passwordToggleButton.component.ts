import { PasswordState } from '..';

export class PasswordToggleButtonComponentFactory{
    public static create(passwordInput: HTMLInputElement) : HTMLButtonElement {
        const showButton = document.createElement('button');
        showButton.textContent = 'Show';

        showButton.addEventListener('click', (event) => {
          event.preventDefault();
          const newState  = this.togglePassword(passwordInput.type);
          showButton.textContent = newState.title;
          passwordInput.type = newState.type;
        });
        return showButton;
    }

    private static togglePassword(buttonType:string) : PasswordState {
      return buttonType === 'password' ? {title: "Hide", type: "text"} : {title: "Show", type: "password"}
    }
}