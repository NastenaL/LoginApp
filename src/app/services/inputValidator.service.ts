import { constants, PasswordValidation } from '../services';

export class InputValidator {

    public static checkEmail(email: string): boolean{
        return constants.emailMask.test(email);
    } 

    public static checkPassword(password: string, badge :HTMLSpanElement) : PasswordValidation{
        let strengthLevel : string = 'Weak';
        let isCorrect : boolean = false; 

        if(constants.strongPassword.test(password)) {
            strengthLevel = 'Strong';
            isCorrect = true;
            badge.style.backgroundColor = "green";
            badge.textContent = 'Strong';
        } else if(constants.mediumPassword.test(password)) {
            strengthLevel = 'Medium';
            isCorrect = true;
            badge.style.backgroundColor = 'blue';
            badge.textContent = 'Medium';
        } else {
            badge.style.backgroundColor = 'red';
            badge.textContent = 'Weak';
        }

        const result : PasswordValidation = {strengthLevel, isCorrect};
        return result;
    }
}

export type ValidateResponse ={
    strengthLevel : string, 
    isCorrect : boolean
}