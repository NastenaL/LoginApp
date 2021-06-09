import { InputValidator } from '../services/inputValidator.service';
import { DebounceHelper } from '../helpers/debounce.helper';

export class SignInComponent{
    private readonly form : HTMLFormElement;

    constructor(private readonly container : Element){
        this.container = container;
        this.form = document.createElement('form');
    }

    public render() : void{
        this.container.innerHTML = "";
        this.form.id = "signInForm";

        this.createEmailField();
        this.createPasswordField();
        this.createSignInButton();

        this.container.appendChild(this.form);
    }

    private createEmailField() : void{
        const emailInput = document.createElement('input');
        emailInput.type = "text";
        emailInput.id = "emailInput";
        emailInput.maxLength =40;
        emailInput.minLength =3;
        emailInput.focus();
        emailInput.addEventListener('input',() =>{
            DebounceHelper.delay()
            .init()
            .then(() => {
                const validator = new InputValidator();
                console.log(validator.checkEmail(emailInput));
            });
        });

        const emailLabel = document.createElement('label');
        emailLabel.innerText = "Email";
        emailLabel.htmlFor = "emailInput";
        
        this.form.appendChild(emailLabel);
        this.form.appendChild(emailInput);
    }

    private createPasswordField() : void{
        const passwordLabel = document.createElement('label');
        passwordLabel.innerText = "Password";
        const passwordInput = document.createElement('input');
        passwordInput.type = "text";
        passwordInput.focus();

        this.form.appendChild(passwordLabel);
        this.form.appendChild(passwordInput);
    }

    private createSignInButton() : void{
        const signInButton = document.createElement('button');
        signInButton.type = "submit"
        signInButton.textContent = "Sign in";

        this.form.appendChild(signInButton);
    }
}