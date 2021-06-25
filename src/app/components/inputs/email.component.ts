export class EmailComponentFactory{

    public static create() : HTMLDivElement{
        const emailDiv = document.createElement('div');
        const emailInput = this.createInput();
        const emailLabel = this.createLabel();

        [emailLabel, emailInput].forEach(item => emailDiv.appendChild(item));
        return emailDiv;
    }

    public static createInput() : HTMLInputElement {
        const emailInput = document.createElement('input');
        Object.assign(emailInput, {id: 'emailInput', type: 'email', maxLength: 40, minLength:3, autofocus: true});

        emailInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();

            emailInput.autofocus = false;
            document.getElementById('passwordInput')!.focus();
            }
        });
        return emailInput;            
    }

    private static createLabel() : HTMLLabelElement {
        const emailLabel = document.createElement('label');
        Object.assign(emailLabel, {innerText: 'Email', htmlFor: 'emailInput'});    
        return emailLabel;   
    }
}