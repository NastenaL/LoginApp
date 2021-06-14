import { constants } from '../services';

export class InputValidator {

    public checkEmail(input: HTMLInputElement): boolean{
        return constants.emailMask.test(input.value);
    } 

    public checkPassword(password: string, badge :HTMLSpanElement){
        let isCorrect = false;
        if(constants.strongPassword.test(password)) {
            isCorrect = true;
            badge.style.backgroundColor = "green";
            badge.textContent = 'Strong';
        } else if(constants.mediumPassword.test(password)) {
            isCorrect = true;
            badge.style.backgroundColor = 'blue';
            badge.textContent = 'Medium';
        } else {
            badge.style.backgroundColor = 'red';
            badge.textContent = 'Weak';
        }

        return isCorrect;
    }
}
