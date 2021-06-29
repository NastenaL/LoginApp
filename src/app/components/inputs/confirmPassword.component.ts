export class ConfirmPasswordComponentFactory{

    // TODO: Remove unused property
    public static create(initialState: string) : HTMLDivElement{
        const confirmPasswordDiv = document.createElement('div');
        const confirmPasswordInput = this.createInput();
        const confirmPasswordLabel = this.createLabel();

        [confirmPasswordLabel, confirmPasswordInput].forEach(item => confirmPasswordDiv.appendChild(item));
        return confirmPasswordDiv;
    }

    private static createInput() : HTMLInputElement{
        const confirmPasswordInput = document.createElement('input');
        Object.assign(confirmPasswordInput, {id: 'confirmPasswordInput', type: 'password', minLength: 8, maxLength: 60});
        return confirmPasswordInput;
    }

    private static createLabel() : HTMLLabelElement {
        const confirmPasswordLabel = document.createElement('label');
        Object.assign(confirmPasswordLabel, {innerText : 'Confirm password', htmlFor: 'confirmPasswordInput'});
        return confirmPasswordLabel;   
    }
}