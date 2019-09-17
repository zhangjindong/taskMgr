import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Sanitizer
} from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter<void>();
  @Output() toggleDarkTheme = new EventEmitter<boolean>();
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'yunyin',
      sanitizer.bypassSecurityTrustResourceUrl('assets/运营管理.svg')
    );
  }

  ngOnInit() {}
  openSidebar() {
    this.toggle.emit();
  }
  onChange(checked: boolean) {
    this.toggleDarkTheme.emit(checked);
  }
}
