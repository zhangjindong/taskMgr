import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkTheme = false;
  constructor(private oc: OverlayContainer) {}
  switchTheme(checked: boolean) {
    this.darkTheme = checked;
    // 针对弹出框。menu 的主题单独设置class。
    this.oc
      .getContainerElement()
      .classList.add(checked ? 'my-dark-theme' : null);
  }
}
