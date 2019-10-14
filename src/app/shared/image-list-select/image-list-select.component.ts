import { Component, OnInit, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  FormControl,
  ValidationErrors
} from '@angular/forms';

@Component({
  selector: 'app-image-list-select',
  templateUrl: './image-list-select.component.html',
  styleUrls: ['./image-list-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImageListSelectComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ImageListSelectComponent),
      multi: true
    }
  ]
})
export class ImageListSelectComponent implements ControlValueAccessor {
  @Input() cols = 6;
  @Input() rowHeight = '64px';
  @Input() title = '请选择';
  @Input() items: string[] = [];
  @Input() selected = '';
  @Input() useSvgIcon: boolean = false;
  @Input() itemWidth = '80px';
  // @Input() itemWidth: boolean = false;

  constructor() {}
  private propagateChange = (_: any) => {};
  onChange(i) {
    this.selected = this.items[i];
    this.propagateChange(this.selected);
  }

  writeValue(obj: any): void {
    this.selected = obj;
    // throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
    // throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
    this.propagateChange = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
  validate(c: FormControl): ValidationErrors {
    return this.selected
      ? null
      : {
          imgListInvalid: { valid: false }
        };
  }
}
