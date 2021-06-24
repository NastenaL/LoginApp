import { PasswordBadgeFactory, InputValidator, PasswordToggleButtonFactory } from '..';

export class PasswordComponentFactory{
    public static create(initialState: string) : HTMLDivElement{
        const passwordDiv : HTMLDivElement = document.createElement('div');
        const badge : HTMLSpanElement = PasswordBadgeFactory.create(initialState);
        const passwordInput : HTMLInputElement = this.createInput(initialState, badge);
        const passwordLabel : HTMLLabelElement = this.createLabel();
        const toggleButton = PasswordToggleButtonFactory.create(passwordInput);

        [passwordLabel, passwordInput, badge, toggleButton].forEach(item => passwordDiv.appendChild(item));
        return passwordDiv;
    }

    private static createInput(initialState: string, badge : HTMLSpanElement) : HTMLInputElement{
        const passwordInput : HTMLInputElement = document.createElement('input');
        Object.assign(passwordInput, {id: 'passwordInput', type: 'password', minLength: 8, maxLength: 60});

        const validator = new InputValidator(); 

        // TODO: Move into badge component scope
        passwordInput.addEventListener('input', () => {
             const checkedPassword: [string, boolean] = validator.checkPassword(passwordInput.value);
             badge.value  = checkedPassword[0];
        });
        return passwordInput;
    }

    private static createLabel() : HTMLLabelElement{
        const passwordLabel : HTMLLabelElement = document.createElement('label');
        Object.assign(passwordLabel, {innerText : 'Password', htmlFor: 'passwordInput'});
        return passwordLabel;       
    }
}