import { InputValidator } from '../services/inputValidator.service';
import { DebounceHelper } from '../helpers/debounce.helper';
import { togglePassword } from '../helpers/passwordVisibility.helper';

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

    private createPasswordField() : void{
        const passwordLabel = document.createElement('label');
        passwordLabel.innerText = "Password";
        const passwordInput = document.createElement('input');
        passwordInput.maxLength =60;
        passwordInput.minLength =8;
        passwordInput.id ="passwordInput";
        passwordInput.type = "password";

        const badge = document.createElement('span');
        badge.id = "StrengthDisp";
        badge.textContent = "Weak";
        
        passwordInput.addEventListener('input',() =>{
            DebounceHelper.delay()
            .init()
            .then(() => {
                const validator = new InputValidator();
                console.log(validator.checkPassword(passwordInput.value, badge));
            });
        });

        const showButton = this.createShowButton(passwordInput);

        this.form.appendChild(passwordLabel);
        this.form.appendChild(passwordInput);
        this.form.appendChild(badge);
        this.form.appendChild(showButton);
    }

private createShowButton(passwordInput: HTMLInputElement) : HTMLButtonElement{
    const showButton = document.createElement('button');
    showButton.textContent = "Show";
    showButton.addEventListener('click', ()=>{
        togglePassword(passwordInput, showButton);
    });
    return showButton;
}

    private createEmailField() : void{
        const emailInput = document.createElement('input');
        emailInput.id = "emailInput";
        emailInput.type = "email";
        emailInput.maxLength =40;
        emailInput.minLength =3;
        emailInput.autofocus = true;
        emailInput.addEventListener('input',() =>{
            DebounceHelper.delay()
            .init()
            .then(() => {
                const validator = new InputValidator();
                console.log(validator.checkEmail(emailInput));
            });
        });
        emailInput.addEventListener('keypress', (event)=>{
            if (event.key == "Enter") {
                event.preventDefault();
                console.log(document.getElementById("passwordInput"));

                emailInput.autofocus = false;
                document.getElementById("passwordInput")!.focus();
            }
        });
       
        const emailLabel = document.createElement('label');
        emailLabel.innerText = "Email";
        emailLabel.htmlFor = "emailInput";
        
        this.form.appendChild(emailLabel);
        this.form.appendChild(emailInput);
    }

    private createSignInButton() : void{
        const signInButton = document.createElement('button');
        signInButton.type = "submit"
        signInButton.textContent = "Sign in";

        this.form.appendChild(signInButton);
    }
}