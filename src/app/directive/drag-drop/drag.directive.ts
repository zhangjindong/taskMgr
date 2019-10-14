import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  Input
} from '@angular/core';
import { DragDropService } from '../drag-drop.service';

@Directive({
  selector: '[app-draggable][dragTag][dragData][draggedClass]'
})
export class DragDirective {
  private _isDraggble = false;

  @Input('app-draggable')
  set isDraggable(val: boolean) {
    this._isDraggble = val;
    this.rd.setAttribute(this.el.nativeElement, 'draggable', `${val}`);
  }
  get isDraggable() {
    return this._isDraggble;
  }
  @Input() draggedClass = '';
  @Input() dragTag: string;
  @Input() dragData: any;
  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private service: DragDropService
  ) {}

  @HostListener('dragstart', ['$event'])
  onDragStart(ev: Event) {
    // 首先要判断 当前拖动的元素，是不是当前元素
    if (ev.target === this.el.nativeElement) {
      this.rd.addClass(this.el.nativeElement, this.draggedClass);
      this.service.setDragData({ tag: this.dragTag, data: this.dragData });
    }
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(ev: Event) {
    // 首先要判断 当前拖动的元素，是不是当前元素
    if (ev.target === this.el.nativeElement) {
      this.rd.removeClass(this.el.nativeElement, this.draggedClass);
    }
  }
}
