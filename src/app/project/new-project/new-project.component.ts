import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<NewProjectComponent>
  ) {}

  ngOnInit() {
    console.log(JSON.stringify(this.data));
    // this.oc.themeClass=this.data.dark?'my-dark-theme',null;
  }
  onClick() {
    this.dialogRef.close('我接受到你的消息');
  }
}
