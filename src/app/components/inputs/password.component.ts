import { PasswordBadge, InputValidator, PasswordToggleButton } from '../labels';

export class PasswordComponent{
    public static create(initialState: string) : HTMLDivElement{
        const passwordDiv = document.createElement('div');

        const passwordLabel = document.createElement('label');
        Object.assign(passwordLabel, {innerText : 'Password', htmlFor: 'passwordInput'});

        const passwordInput = document.createElement('input');
        Object.assign(passwordInput, {id: 'passwordInput', type: 'password', minLength: 8, maxLength: 60});

        const badge = PasswordBadge.create(initialState);
        const validator = new InputValidator(); 

        // TODO: Move into badge component scope
        passwordInput.addEventListener('input', () => {
             const checkedPassword: [string, boolean] = validator.checkPassword(passwordInput.value);
             badge.value  = checkedPassword[0];
        });
        const toggleButtonCreator : PasswordToggleButton = new PasswordToggleButton();
        const toggleButton = toggleButtonCreator.create(passwordInput);

        [passwordLabel, passwordInput, badge, toggleButton].forEach(item => passwordDiv.appendChild(item));
        return passwordDiv;
    }
}