import { constants, PasswordValidation, StrengthLevel, PasswordValidationColor } from '../services';

export class InputValidator {

    public static checkEmail(email: string): boolean{
        return constants.emailMask.test(email);
    } 

    public static checkPassword(password: string, badge :HTMLSpanElement) : PasswordValidation{
        let strengthLevel : string = StrengthLevel.weak;
        let isCorrect : boolean = false; 

        if(constants.strongPassword.test(password)) {
            strengthLevel = StrengthLevel.strong;
            isCorrect = true;
            badge.style.backgroundColor = PasswordValidationColor.green;
            badge.textContent = StrengthLevel.strong;
        } else if(constants.mediumPassword.test(password)) {
            strengthLevel = StrengthLevel.medium;
            isCorrect = true;
            badge.style.backgroundColor = PasswordValidationColor.blue;
            badge.textContent = StrengthLevel.medium;
        } else {
            badge.style.backgroundColor = PasswordValidationColor.red;
            badge.textContent = StrengthLevel.weak;
        }

        const result : PasswordValidation = {strengthLevel, isCorrect};
        return result;
    }
}