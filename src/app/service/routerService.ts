import {Path} from "../enum/path";

export class RouterService1 {
    container: Element;
  
    constructor(container: Element) {
        this.container = container;
    }
  
    locationResolver(location: string){
        switch(location){
            case Path.sign_up:
                this.container.innerHTML = `<h1>${location}</h1>`;
                break;
            case Path.sign_in:
                this.container.innerHTML = `<h1>${location}</h1>`;
                break;
            case Path.home:
                this.container.innerHTML = `<h1>${location}</h1>`;
                break;
        }      
    }
    
}

export default RouterService1;