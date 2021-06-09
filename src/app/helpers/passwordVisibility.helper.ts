export function togglePassword(passwordInput: HTMLInputElement, showButton: HTMLButtonElement) : void{
    if(passwordInput.type == "password"){
        showButton.textContent = "Hide";
        passwordInput.type = "text";
    }
    else{
        showButton.textContent = "Show";
        passwordInput.type = "password";
    } 
}