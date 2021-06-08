import {Path} from "../enums/path.enum";

export class RouterService {
  
    constructor(private readonly container: Element) {
        this.container = container;
    }
  
    public init(navigation :  HTMLCollectionOf<HTMLAnchorElement>){
        this.responseType();

        Array.from(navigation).forEach(item => {
            item.addEventListener('click', ()=>{
            this.renderLocation(item.hash.slice(0, -1));
            });
        });
    }

    private responseType(){
        window.addEventListener('load', () => {
            const location = window.location.hash;
            if(location){
              this.renderLocation(location);
            }
        });
    }

    private renderLocation(location: string){
        switch(location){
            case Path.signUp:
                this.container.innerHTML = `<h1>${location}</h1>`;
                break;
            case Path.signIn:
                this.container.innerHTML = `<h1>${location}</h1>`;
                break;
            case Path.home:
                this.container.innerHTML = `<h1>${location}</h1>`;
                break;
        }      
    }
}