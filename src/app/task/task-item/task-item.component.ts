import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ChangeDetectionStrategy
} from '@angular/core';
import { itemAnim } from '../../anims/item.anim';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [itemAnim],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskItemComponent implements OnInit {
  widerPriority = 'in';
  @Input() item: any;
  @Input() avatar: any;
  @Output() taskClick = new EventEmitter<any>();

  @HostListener('mouseenter', ['$event.target'])
  onMouseEnter(ev: Event) {
    this.widerPriority = 'out';
  }

  @HostListener('mouseleave', ['$event.target'])
  onMouseLeave(ev: Event) {
    this.widerPriority = 'in';
  }
  constructor() {}

  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avatar : 'unassigned';
  }
  onItemClick() {
    this.taskClick.emit(null);
  }
  onCheckBoxClick(ev: Event) {
    ev.stopPropagation();
  }
}
