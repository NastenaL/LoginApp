export class FirstNameComponent{

    public static create() : HTMLDivElement{
        const firstNameDiv = document.createElement('div');
        const firstNameInput = document.createElement('input');
        Object.assign(firstNameInput, {id: 'emailInput', type: 'email', maxLength: 40, minLength:3, autofocus: true});
        
        firstNameInput.addEventListener('input', () => {
            const validator = new InputValidator();
            this.isCorrectField = validator.checkEmail(firstNameInput.value);
        });

        firstNameInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();

            firstNameInput.autofocus = false;
            document.getElementById('lastNameInput')!.focus();
            }
        });

        const emailLabel = document.createElement('label');
        Object.assign(emailLabel, {innerText: 'First name', htmlFor: 'firstNameInput'});

        [emailLabel, firstNameInput].forEach(item => firstNameDiv.appendChild(item));
        return firstNameDiv;
    }
}