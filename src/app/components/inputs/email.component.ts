import { DebounceHelper, InputValidator } from '..';

export class EmailComponentFactory{

    public static create() : HTMLDivElement{
        const emailDiv = document.createElement('div');
        const emailInput = document.createElement('input');
        Object.assign(emailInput, {id: 'emailInput', type: 'email', maxLength: 40, minLength:3, autofocus: true});
        const debounce : DebounceHelper = new DebounceHelper();
        
        emailInput.addEventListener('input', () => {
            const validator = new InputValidator();
            this.isCorrectField = validator.checkEmail(emailInput.value);
        });

        emailInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            console.log(document.getElementById('passwordInput'));

            emailInput.autofocus = false;
            document.getElementById('passwordInput')!.focus();
            }
        });

        const emailLabel = document.createElement('label');
        Object.assign(emailLabel, {innerText: 'Email', htmlFor: 'emailInput'});

        [emailLabel, emailInput].forEach(item => emailDiv.appendChild(item));
        return emailDiv;
    }
}