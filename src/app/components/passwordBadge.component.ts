import {InputValidator} from './labels'

export class PasswordBadge{
    public static create(passwordState : string) : HTMLSpanElement{
        const badge = document.createElement('span');
        badge.id = 'passwordBadge';
        badge.textContent = passwordState;
        return badge;
    }

    public static check(passwordText: string) : string{
        const validator = new InputValidator();
        return validator.checkPassword(passwordText);
    }
}