export class InputValidator {
    private readonly emailMask = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    private readonly strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
    private readonly mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')

    public checkEmail(input: HTMLInputElement): boolean{
        return this.emailMask.test(input.value);
    } 

    public checkPassword(password: string, badge :HTMLSpanElement){
        if(this.strongPassword.test(password)) {
            badge.style.backgroundColor = "green";
            badge.textContent = 'Strong';
        } else if(this.mediumPassword.test(password)) {
            badge.style.backgroundColor = 'blue';
            badge.textContent = 'Medium';
        } else {
            badge.style.backgroundColor = 'red';
            badge.textContent = 'Weak';
        }
    }
}
