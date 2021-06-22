import { InputValidator } from '../labels';

export class AgeComponent{

    public static create() : HTMLDivElement{
        const ageDiv = document.createElement('div');
        const ageInput = document.createElement('input');
        Object.assign(ageInput, {id: 'emailInput', type: 'email', maxLength: 20, minLength:3, autofocus: true});

        ageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();

            ageInput.autofocus = false;
            document.getElementById('passwordInput')!.focus();
            }
        });

        const ageLabel = document.createElement('label');
        Object.assign(ageLabel, {innerText: 'Age', htmlFor: 'ageInput'});

        [ageLabel, ageInput].forEach(item => ageDiv.appendChild(item));
        return ageDiv;
    }
}