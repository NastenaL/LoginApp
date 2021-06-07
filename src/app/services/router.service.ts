import {Path} from "../enums/path.enum";

export class RouterService {
    container: Element;
  
    constructor(container: Element) {
        this.container = container;
    }
  
    private changeHash(){
        window.addEventListener('load', () => {
            const location = window.location.hash;
            if(location){
              this.renderLocation(location);
            }
        });
    }

    private renderLocation(location: string){
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

    init(navigation :  HTMLCollectionOf<HTMLAnchorElement>){
        this.changeHash();

        [...navigation].forEach(item => {
            item.addEventListener('click', ()=>{
            this.renderLocation(item.hash.slice(0, -1)            );
            });
        });
    }
}

export default RouterService;