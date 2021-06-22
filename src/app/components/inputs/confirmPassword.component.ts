import { InputValidator } from '../labels';

export class ConfirmPasswordComponent{
    public static create(initialState: string) : HTMLDivElement{
        const confirmPasswordDiv = document.createElement('div');

        const confirmPasswordLabel = document.createElement('label');
        Object.assign(confirmPasswordLabel, {innerText : 'Confirm password', htmlFor: 'confirmPasswordInput'});

        const confirmPasswordInput = document.createElement('input');
        Object.assign(confirmPasswordInput, {id: 'confirmPasswordInput', type: 'password', minLength: 8, maxLength: 60});
        const validator = new InputValidator(); 

        confirmPasswordInput.addEventListener('input', () => {
            // add check with password
        });

        [confirmPasswordLabel, confirmPasswordInput].forEach(item => confirmPasswordDiv.appendChild(item));
        return confirmPasswordDiv;
    }
}