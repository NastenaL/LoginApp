export class SideMenuHelper{
    constructor(private readonly menuPanel: HTMLElement){
        this.menuPanel = menuPanel;
    }
    public openNav() : void{
        this.menuPanel.style.width = "250px";
      }
      
      public closeNav() : void {
        this.menuPanel.style.width = "0";
      }
}