export class SignUpButtonComponent{

    public static create(): HTMLButtonElement {
        const signUpButton = document.createElement('button');
        signUpButton.id = 'signUpButton';
        signUpButton.type = 'submit';
        signUpButton.textContent = 'Sign up';
        signUpButton.disabled = true;

        return signUpButton;
      }
}