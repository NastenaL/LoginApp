import { constants } from '../constants/constants';

export class InputValidator {
    private isEmailCorrect : boolean = false;
    private isPasswordCorrect : boolean = false;

    public checkEmail(input: HTMLInputElement): boolean{
        const isCorrect : boolean = constants.emailMask.test(input.value);
        if(isCorrect){
            this.isEmailCorrect = true;
        }
        return isCorrect;
    } 

    public checkPassword(password: string, badge :HTMLSpanElement){
        if(constants.strongPassword.test(password)) {
            this.isPasswordCorrect = true;
            badge.style.backgroundColor = "green";
            badge.textContent = 'Strong';
        } else if(constants.mediumPassword.test(password)) {
            this.isPasswordCorrect = true;
            badge.style.backgroundColor = 'blue';
            badge.textContent = 'Medium';
        } else {
            badge.style.backgroundColor = 'red';
            badge.textContent = 'Weak';
        }
    }

    public checkForm(submitButton: HTMLButtonElement){
        console.log(this.isEmailCorrect + " " + this.isPasswordCorrect);
        if(this.isEmailCorrect && this.isPasswordCorrect){
            console.log(11111);
            submitButton.disabled = false;
        }
    }
}
