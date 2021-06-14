// TODO: Refactor tp SideMenuComponent
export class SideMenuHelper {
private readonly menuPanel : HTMLElement;

  constructor() {
    this.menuPanel = document.getElementById("sideMenu")!;
  }

  public init(): void{
    const openButton = document.getElementById("openButton")!;
    const closeButton = document.getElementById("closeButton")!;
    
    openButton.addEventListener('click', () =>{
      this.openNav();
    });

    closeButton.addEventListener('click', () =>{
      this.closeNav();
    });
}

  private openNav(): void {
    // TODO: Move into css classes and use toggle classNames
    this.menuPanel.style.width = '250px';
  }

  private closeNav(): void {
    this.menuPanel.style.width = '0';
  }
}
