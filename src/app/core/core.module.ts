import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { loadSvgResources } from '../util/svg.util';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [HttpClientModule, BrowserAnimationsModule, SharedModule],
  exports: [HeaderComponent, FooterComponent, SidebarComponent, SharedModule]
})
export class CoreModule {
  /**
   * SkipSelf 为避免找到自己身上，排除自己。从父级的池里找
   * Optional 表示是可选的，第一次进入的时候，还没有CoreModule
   * @param parent
   */
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    ir: MatIconRegistry,
    ds: DomSanitizer
  ) {
    if (parent) {
      throw new Error('模块已经存在');
    }
    // 加载svg资源
    loadSvgResources(ir, ds);
  }
}
