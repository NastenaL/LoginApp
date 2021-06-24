export class ConfirmPasswordComponentFactory{

    public static create(initialState: string) : HTMLDivElement{
        const confirmPasswordDiv : HTMLDivElement = document.createElement('div');
        const confirmPasswordInput : HTMLInputElement = this.createInput();
        const confirmPasswordLabel : HTMLLabelElement = this.createLabel();

        [confirmPasswordLabel, confirmPasswordInput].forEach(item => confirmPasswordDiv.appendChild(item));
        return confirmPasswordDiv;
    }

    private static createInput() : HTMLInputElement{
        const confirmPasswordInput : HTMLInputElement = document.createElement('input');
        Object.assign(confirmPasswordInput, {id: 'confirmPasswordInput', type: 'password', minLength: 8, maxLength: 60});
        return confirmPasswordInput;
    }

    private static createLabel() : HTMLLabelElement {
        const confirmPasswordLabel : HTMLLabelElement = document.createElement('label');
        Object.assign(confirmPasswordLabel, {innerText : 'Confirm password', htmlFor: 'confirmPasswordInput'});
        return confirmPasswordLabel;   
    }
}