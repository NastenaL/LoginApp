export class SignInButtonComponentFactory {
  public static create(): HTMLButtonElement {
    // TODO: Check and move create button into shared class or utils and reuse under SignInButtonComponentFactory and SignUpButtonComponentFactory 
    const signInButton = document.createElement('button');
    signInButton.id = 'signInButton';
    signInButton.type = 'submit';
    signInButton.textContent = 'Sign in';
    signInButton.disabled = true;

    return signInButton;
  }
}
