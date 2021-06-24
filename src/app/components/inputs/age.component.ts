import { InputValidator } from '..';

export class AgeComponentFactory{

    public static create() : HTMLDivElement{
        const ageDiv = document.createElement('div');
        const ageInput = document.createElement('input');
        Object.assign(ageInput, {id: 'ageInput', type: 'text'});

        const ageLabel = document.createElement('label');
        Object.assign(ageLabel, {innerText: 'Age', htmlFor: 'ageInput'});

        [ageLabel, ageInput].forEach(item => ageDiv.appendChild(item));
        return ageDiv;
    }
}