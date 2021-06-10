// TODO: Move into PasswordComponent
export function togglePassword(passwordInput: HTMLInputElement, showButton: HTMLButtonElement) {
  //   TODO: Use strict equal
  //   TODO: Do not use mutations,  put new state instead
  if (passwordInput.type == 'password') {
    showButton.textContent = 'Hide';
    passwordInput.type = 'text';
  } else {
    showButton.textContent = 'Show';
    passwordInput.type = 'password';
  }
}
