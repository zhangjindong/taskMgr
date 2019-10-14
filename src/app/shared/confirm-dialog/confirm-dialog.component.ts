import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <h3 mat-dialog-title>{{ title }}</h3>
    <div mat-dialog-content>
      {{ content }}
    </div>
    <div mat-dialog-actions>
      <button
        mat-raised-button
        type="button"
        (click)="onClick(true)"
        color="primary"
      >
        确定
      </button>
      <button
        mat-button
        type="button"
        mat-dialog-close
        (click)="onClick(false)"
      >
        取消
      </button>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmDialogComponent implements OnInit {
  title = '';
  content = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    private dialogRef: MatDialogRef<ConfirmDialogComponent>
  ) {}

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.content;
  }
  onClick(resunt: boolean) {
    this.dialogRef.close(resunt);
  }
}
