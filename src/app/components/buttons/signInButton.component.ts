export class SignInButtonComponentFactory{

    public static create(): HTMLButtonElement {
        const signInButton = document.createElement('button');
        signInButton.id = 'signInButton';
        signInButton.type = 'submit';
        signInButton.textContent = 'Sign in';
        signInButton.disabled = true;

        return signInButton;
      }
}