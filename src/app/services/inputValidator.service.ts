export class InputValidator {
  // TODO: Make RegExp values consistent
  // TODO: Move into constants
  private readonly emailMask =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private readonly strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
  private readonly mediumPassword = new RegExp(
    '((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))'
  );

  // TODO: Move into email component scope
  public checkEmail(input: HTMLInputElement): boolean {
    return this.emailMask.test(input.value);
  }

  // TODO: Move into badge component scope
  // TODO: Add response type
  public checkPassword(password: string, badge: HTMLSpanElement) {
    // TODO: Move .test into variable
    if (this.strongPassword.test(password)) {
      badge.style.backgroundColor = 'green';
      badge.textContent = 'Strong';
      // TODO: Move .test into variable
    } else if (this.mediumPassword.test(password)) {
      badge.style.backgroundColor = 'blue';
      badge.textContent = 'Medium';
    } else {
      badge.style.backgroundColor = 'red';
      badge.textContent = 'Weak';
    }
  }
}
