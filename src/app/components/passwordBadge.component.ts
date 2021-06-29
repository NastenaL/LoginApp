// TODO: Remove unused code
import {InputValidator} from '.'

// TODO:Move into components directory
export class PasswordBadgeComponentFactory{
    public static create(passwordState : string) : HTMLSpanElement{
        const badge = document.createElement('span');
        badge.id = 'passwordBadge';
        badge.textContent = passwordState;
        return badge;
    }
}