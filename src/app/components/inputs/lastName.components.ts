export class LastNameComponentFactory{

    public static create() : HTMLDivElement{
        const lastNameDiv : HTMLDivElement = document.createElement('div');
        const lastNameInput : HTMLInputElement = this.createInput();
        const lastNameLabel : HTMLLabelElement = this.createLabel();

        [lastNameLabel, lastNameInput].forEach(item => lastNameDiv.appendChild(item));
        return lastNameDiv;
    }

    private static createInput() : HTMLInputElement{
        const lastNameInput : HTMLInputElement = document.createElement('input');
        Object.assign(lastNameInput, {id: 'lastNameInput', type: 'text', maxLength: 40, minLength:3});

        lastNameInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();

            lastNameInput.autofocus = false;
            document.getElementById('ageInput')!.focus();
            }
        });
        return lastNameInput;
    }

    private static createLabel() : HTMLLabelElement{
        const lastNameLabel : HTMLLabelElement = document.createElement('label');
        Object.assign(lastNameLabel, {innerText: 'Last name', htmlFor: 'lastNameInput'});
        return lastNameLabel;
    }
}