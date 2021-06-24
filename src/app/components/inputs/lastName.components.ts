import { InputValidator } from '../labels';

export class LastNameComponent{

    public static create() : HTMLDivElement{
        const lastNameDiv = document.createElement('div');
        const lastNameInput = document.createElement('input');
        Object.assign(lastNameInput, {id: 'lastNameInput', type: 'text', maxLength: 40, minLength:3});
        
        lastNameInput.addEventListener('input', () => {
            const validator = new InputValidator();
            //this.isCorrectField = validator.checkEmail(lastNameInput.value);
        });

        lastNameInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();

            lastNameInput.autofocus = false;
            document.getElementById('ageInput')!.focus();
            }
        });

        const lastLabel = document.createElement('label');
        Object.assign(lastLabel, {innerText: 'Last name', htmlFor: 'lastNameInput'});

        [lastLabel, lastNameInput].forEach(item => lastNameDiv.appendChild(item));
        return lastNameDiv;
    }
}