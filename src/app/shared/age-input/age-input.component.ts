import { Component, OnInit, forwardRef } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  ControlValueAccessor,
  FormControl,
  ValidationErrors
} from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';

@Component({
  selector: 'app-age-input',
  templateUrl: './age-input.component.html',
  styleUrls: ['./age-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AgeInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AgeInputComponent),
      multi: true
    }
  ]
})
export class AgeInputComponent implements ControlValueAccessor, OnInit {
  form: FormGroup;
  ageUnits;
  constructor(private fb: FormBuilder) {}
  private propagateChange = (_: any) => {};

  ngOnInit() {
    this.form = this.fb.group({
      birthday: [''],
      age: this.fb.group({
        ageNum: [''],
        ageUnit: ['']
      })
    });
    // 通过事件流的角度分析一下，先获取到能获取到流的元素
    const birthday = this.form.get('birthday');
    const ageNum = this.form.get('ageNum');
    const ageUnit = this.form.get('ageUnit');

    const birthday$ = birthday.valueChanges.pipe(
      map(d => {
        return { date: d, from: 'birthday' };
      })
    );
    const ageNum$ = ageNum.valueChanges;
    const ageUnit$ = ageUnit.valueChanges;
    const age$ = combineLatest(ageNum$, ageUnit$).pipe(
      map((_n, _u) => {
        return this.toDate({ age: _n, unit: _u });
      }),
      map(d => {
        return { date: d, from: 'age' };
      })
    );
  }
  toDate(obj) {}
  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.propagateChange = fn;
  }
  setDisabledState?(isDisabled: boolean): void {}
  validate(c: FormControl): ValidationErrors {
    return this.selected
      ? null
      : {
          imgListInvalid: { valid: false }
        };
  }
}
