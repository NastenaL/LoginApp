import { constants } from '../services';

export class InputValidator {

    public checkEmail(email: string): boolean{
        return constants.emailMask.test(email);
    } 

    public checkPassword(password: string, badge :HTMLSpanElement) : [string, boolean]{
        let state : string = 'Weak';
        let isCorrect : boolean = false; 

        if(constants.strongPassword.test(password)) {
            state = 'Strong';
            isCorrect = true;
            badge.style.backgroundColor = "green";
            badge.textContent = 'Strong';
        } else if(constants.mediumPassword.test(password)) {
            state = 'Medium';
            isCorrect = true;
            badge.style.backgroundColor = 'blue';
            badge.textContent = 'Medium';
        } else {
            badge.style.backgroundColor = 'red';
            badge.textContent = 'Weak';
        }

        return [state,isCorrect];
    }
}
