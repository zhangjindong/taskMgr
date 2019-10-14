import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskHeaderComponent implements OnInit {
  @Input() header = '';
  @Output() doNewTask = new EventEmitter<void>();
  @Output() doMoveAll = new EventEmitter<void>();
  @Output() doDelList = new EventEmitter<void>();
  @Output() doEditList = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}

  onNewTask() {
    this.doNewTask.emit();
  }

  onMoveAllClick() {
    this.doMoveAll.emit();
  }

  onDelListClick() {
    this.doDelList.emit();
  }
  onEditListClick() {
    this.doEditList.emit();
  }
}
