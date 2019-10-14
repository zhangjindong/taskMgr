import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { DragDropService, DragData } from '../drag-drop.service';
import { take } from 'rxjs/operators';

@Directive({
  selector: '[app-droppable][dropTags][dragEnterClass]'
})
export class DropDirective {
  @Input() dragEnterClass: string;

  @Input() dropTags: string[] = [];
  @Output() dropped = new EventEmitter<DragData>();
  private data$;
  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private service: DragDropService
  ) {
    this.data$ = this.service.getDragData().pipe(take(1));
  }
  // 进入我的领域了
  @HostListener('dragenter', ['$event'])
  onDragEnter(ev: Event) {
    // 防止多级拖拽，防止事件冒泡
    ev.preventDefault();
    ev.stopPropagation();
    // 首先要判断 当前拖动的元素，是不是当前元素
    if (ev.target === this.el.nativeElement) {
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.addClass(this.el.nativeElement, this.dragEnterClass);
        }
      });
    }
  }
  // 在我上面
  @HostListener('dragover', ['$event'])
  onDragOver(ev: Event) {
    // 防止多级拖拽，防止事件冒泡
    ev.preventDefault();
    ev.stopPropagation();
    // 首先要判断 当前拖动的元素，是不是当前元素
    if (ev.target === this.el.nativeElement) {
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'all');
          this.rd.setProperty(ev, 'dataTransfer.dropEffect', 'move');
        } else {
          this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'none');
          this.rd.setProperty(ev, 'dataTransfer.dropEffect', 'none');
        }
      });
    }
  }
  // 从我的领域离开
  @HostListener('dragleave', ['$event'])
  onDragLeave(ev: Event) {
    // 首先要判断 当前拖动的元素，是不是当前元素
    if (ev.target === this.el.nativeElement) {
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
        }
      });
    }
  }
  // 放
  @HostListener('drop', ['$event'])
  onDrop(ev: Event) {
    // 首先要判断 当前拖动的元素，是不是当前元素
    if (ev.target === this.el.nativeElement) {
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
          this.dropped.emit(dragData);
          this.service.clearDragData();
        }
      });
    }
  }
}
