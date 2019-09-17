import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// 他这个子组件，他最好只负责显示，有一些输入输出，不涉及任何逻辑，
// 否则的话你的业务逻辑到处都是，会非常分散，
// 以后如果有需求变更，改起来会非常麻烦。
// 希望变成一个笨组件onInviteClick只发射事件
@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  @Input() item: any;
  @Output() doInvite = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}

  onInviteClick() {
    this.doInvite.emit();
  }
}
