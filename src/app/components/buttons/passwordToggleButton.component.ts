// TODO: Fix the import (change path / export interface to index)
import { PasswordState } from '..';

// TODO: Check and update naming, looks like we always use factory postfix but name it always as factory. We need to sync it and define one way for naming
export class PasswordToggleButtonComponentFactory {
  public static create(passwordInput: HTMLInputElement): HTMLButtonElement {
    const showButton = document.createElement('button');
    showButton.textContent = 'Show';

    showButton.addEventListener('click', (event) => {
      event.preventDefault();
      const newState = this.togglePassword(passwordInput.type);
      // TODO: Optionally
      // Looks like we can bind textContent and type into some store and don't pass a direct elements here
      showButton.textContent = newState.title;
      passwordInput.type = newState.type;
    });
    return showButton;
  }

  private static togglePassword(buttonType: string): PasswordState {
    return buttonType === 'password'
      ? { title: 'Hide', type: 'text' }
      : { title: 'Show', type: 'password' };
  }
}
