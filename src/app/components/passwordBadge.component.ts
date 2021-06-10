export class PasswordBadge{
    public static create(passwordState : string) : HTMLSpanElement{
        const badge = document.createElement('span');
        badge.id = 'passwordBadge';
        badge.textContent = passwordState;
        return badge;
    }
}