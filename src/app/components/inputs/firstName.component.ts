export class FirstNameComponentFactory{

    public static create() : HTMLDivElement{
        const firstNameDiv = document.createElement('div');
        const firstNameInput = this.createInput();
        const firstNameLabel = this.createLabel();

        [firstNameLabel, firstNameInput].forEach(item => firstNameDiv.appendChild(item));
        return firstNameDiv;
    }

    private static createInput() : HTMLInputElement{
        const firstNameInput = document.createElement('input');
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
        const firstNameLabel = document.createElement('label');
        Object.assign(firstNameLabel, {innerText: 'First name', htmlFor: 'firstNameInput'});
        return firstNameLabel;
    }
}