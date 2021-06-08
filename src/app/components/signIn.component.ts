export class SignInComponent{
    constructor(private readonly container : Element){
        this.container = container;
    }
    public render(): void{
        this.container.innerHTML = "";
        const emailLabel = document.createElement('label');
        emailLabel.innerText = "Email";
        const emailInput = document.createElement('input');
        emailInput.type = "test";
        emailInput.focus();

        this.container.appendChild(emailLabel);
        this.container.appendChild(emailInput);
    }
}