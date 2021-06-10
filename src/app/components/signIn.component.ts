// TODO: Use index.ts barrel instead
import { DebounceHelper } from '../helpers/debounce.helper';
import { togglePassword } from '../helpers/passwordVisibility.helper';
import { InputValidator } from '../services/inputValidator.service';

// TODO: Split components into pages / components
export class SignInComponent {
  private readonly form: HTMLFormElement;

  constructor(private readonly container: Element) {
    // TODO: Remove and reverse dependency
    this.container = container;
    this.form = document.createElement('form');
  }

  public render(): void {
    // TODO: Remove
    this.container.innerHTML = '';
    // TODO: Put form creation logic into one separate method
    this.form.id = 'signInForm';

    // TODO: Refactor and return target elements
    this.createEmailField();
    this.createPasswordField();
    this.createSignInButton();

    // TODO: Move to router level
    this.container.appendChild(this.form);
  }

  private createPasswordField(): void {
    // TODO: Attach label to password input
    const passwordLabel = document.createElement('label');
    passwordLabel.innerText = 'Password';
    // TODO: Move into separate input component
    const passwordInput = document.createElement('input');
    passwordInput.maxLength = 60;
    passwordInput.minLength = 8;
    passwordInput.id = 'passwordInput';
    passwordInput.type = 'password';

    // TODO: Move into component
    const badge = document.createElement('span');
    badge.id = 'StrengthDisp'; // TODO: Rename
    badge.textContent = 'Weak'; // TODO: Move as initial state

    // TODO: Move into badge component scope
    passwordInput.addEventListener('input', () => {
      DebounceHelper.delay()
        .init()
        .then(() => {
          const validator = new InputValidator(); // TODO: Move above according to performance concerns
          console.log(validator.checkPassword(passwordInput.value, badge));
        });
    });

    const showButton = this.createShowButton(passwordInput);

    this.form.appendChild(passwordLabel);
    this.form.appendChild(passwordInput);
    this.form.appendChild(badge);
    this.form.appendChild(showButton);
  }

  private createShowButton(passwordInput: HTMLInputElement): HTMLButtonElement {
    const showButton = document.createElement('button');
    showButton.textContent = 'Show';
    showButton.addEventListener('click', () => {
      togglePassword(passwordInput, showButton);
    });
    return showButton;
  }

  private createEmailField(): void {
    const emailInput = document.createElement('input');
    // TODO: Check and refactor to Object.assign
    emailInput.id = 'emailInput';
    emailInput.type = 'email';
    emailInput.maxLength = 40;
    emailInput.minLength = 3;
    emailInput.autofocus = true;

    emailInput.addEventListener('input', () => {
      // TODO: Fix this delay functionality
      DebounceHelper.delay()
        .init()
        .then(() => {
          const validator = new InputValidator();
          console.log(validator.checkEmail(emailInput));
        });
    });
    emailInput.addEventListener('keypress', (event) => {
      // TODO: use === instead
      if (event.key == 'Enter') {
        event.preventDefault();
        console.log(document.getElementById('passwordInput'));

        emailInput.autofocus = false;
        document.getElementById('passwordInput')!.focus();
      }
    });

    // TODO: Move into separate method
    const emailLabel = document.createElement('label');
    emailLabel.innerText = 'Email';
    emailLabel.htmlFor = 'emailInput';

    this.form.appendChild(emailLabel);
    this.form.appendChild(emailInput);
  }

  private createSignInButton(): void {
    const signInButton = document.createElement('button');
    signInButton.type = 'submit';
    signInButton.textContent = 'Sign in';

    this.form.appendChild(signInButton);
  }
}
