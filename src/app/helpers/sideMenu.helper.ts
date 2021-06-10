// TODO: Refactor tp SideMenuComponent
export class SideMenuHelper {
  constructor(private readonly menuPanel: HTMLElement) {
    this.menuPanel = menuPanel;
  }
  public openNav(): void {
    // TODO: Move into css classes and use toggle classNames
    this.menuPanel.style.width = '250px';
  }

  public closeNav(): void {
    this.menuPanel.style.width = '0';
  }
}
