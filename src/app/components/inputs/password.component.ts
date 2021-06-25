import { PasswordBadgeComponentFactory, InputValidator, PasswordToggleButtonComponentFactory } from '..';

export class PasswordComponentFactory{
    public static create(initialState: string) : HTMLDivElement{
        const passwordDiv = document.createElement('div');
        const badge = PasswordBadgeComponentFactory.create(initialState);
        const passwordInput = this.createInput(initialState, badge);
        const passwordLabel = this.createLabel();
        const toggleButton = PasswordToggleButtonComponentFactory.create(passwordInput);

        [passwordLabel, passwordInput, badge, toggleButton].forEach(item => passwordDiv.appendChild(item));
        return passwordDiv;
    }

    private static createInput(initialState: string, badge : HTMLSpanElement) : HTMLInputElement{
        const passwordInput = document.createElement('input');
        Object.assign(passwordInput, {id: 'passwordInput', type: 'password', minLength: 8, maxLength: 60});

        const validator = new InputValidator(); 

        // TODO: Move into badge component scope
        passwordInput.addEventListener('input', () => {
             const checkedPassword = validator.checkPassword(passwordInput.value);
             badge.value  = checkedPassword[0];
        });
        return passwordInput;
    }

    private static createLabel() : HTMLLabelElement{
        const passwordLabel = document.createElement('label');
        Object.assign(passwordLabel, {innerText : 'Password', htmlFor: 'passwordInput'});
        return passwordLabel;       
    }
}