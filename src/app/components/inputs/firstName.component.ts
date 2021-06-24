export class FirstNameComponentFactory{

    public static create() : HTMLDivElement{
        const firstNameDiv : HTMLDivElement = document.createElement('div');
        const firstNameInput : HTMLInputElement = this.createInput();
        const firstNameLabel : HTMLLabelElement = this.createLabel();

        [firstNameLabel, firstNameInput].forEach(item => firstNameDiv.appendChild(item));
        return firstNameDiv;
    }

    private static createInput() : HTMLInputElement{
        const firstNameInput : HTMLInputElement = document.createElement('input');
        Object.assign(firstNameInput, {id: 'firstNameInput', type: 'text', maxLength: 20, minLength:3, autofocus: true});

        firstNameInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();

            firstNameInput.autofocus = false;
            document.getElementById('lastNameInput')!.focus();
            }
        });

        firstNameInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
    
                firstNameInput.autofocus = false;
                document.getElementById('lastNameInput')!.focus();
                }
            });
        return firstNameInput;
    }

    private static createLabel() : HTMLLabelElement {
        const firstNameLabel : HTMLLabelElement = document.createElement('label');
        Object.assign(firstNameLabel, {innerText: 'First name', htmlFor: 'firstNameInput'});
        return firstNameLabel;
    }
}