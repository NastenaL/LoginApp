export class AgeComponentFactory{

    public static create() : HTMLDivElement{
        const ageDiv = document.createElement('div');
        const ageInput = this.createInput();
        const ageLabel = this.createLabel();

        [ageLabel, ageInput].forEach(item => ageDiv.appendChild(item));
        return ageDiv;
    }

    private static createInput() : HTMLInputElement{
        // TODO: Check and move input creation into separate function, where we can reuse it at other componentFactories. Same for label element
        const ageInput = document.createElement('input');
        Object.assign(ageInput, {id: 'ageInput', type: 'text'});
        return ageInput;
    }

    private static createLabel() : HTMLLabelElement{
        const ageLabel = document.createElement('label');
        Object.assign(ageLabel, {innerText: 'Age', htmlFor: 'ageInput'});
        return ageLabel;
    }
}