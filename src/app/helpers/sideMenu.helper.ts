const menuPanel = document.getElementById("sideMenu")!;
// TODO: Refactor tp SideMenuComponent
export class SideMenuHelper {

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
    menuPanel.style.width = '250px';
  }

  public closeNav(): void {
    menuPanel.style.width = '0';
  }
}
