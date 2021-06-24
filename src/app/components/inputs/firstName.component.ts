import { InputValidator } from '../labels';

export class FirstNameComponent{

    public static create() : HTMLDivElement{
        const firstNameDiv = document.createElement('div');
        const firstNameInput = document.createElement('input');
        Object.assign(firstNameInput, {id: 'firstNameInput', type: 'text', maxLength: 20, minLength:3, autofocus: true});
        
        firstNameInput.addEventListener('input', () => {
            const validator = new InputValidator();
          //  this.isCorrectField = validator.checkEmail(firstNameInput.value);
        });

        firstNameInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();

            firstNameInput.autofocus = false;
            document.getElementById('lastNameInput')!.focus();
            }
        });

        const firstLabel = document.createElement('label');
        Object.assign(firstLabel, {innerText: 'First name', htmlFor: 'firstNameInput'});

        [firstLabel, firstNameInput].forEach(item => firstNameDiv.appendChild(item));
        return firstNameDiv;
    }
}