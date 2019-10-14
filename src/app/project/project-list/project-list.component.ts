import {
  Component,
  OnInit,
  HostBinding,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { slideToRightAnim } from 'src/app/anims/router.anim';
import { listAnimation } from 'src/app/anims/list.anim';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [slideToRightAnim, listAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent implements OnInit {
  @HostBinding('@routeAnim') state;
  projects = [
    {
      id: 1,
      name: '企业协作平台',
      desc: '这是一个企业内部项目',
      coverImg: 'assets/img/covers/0.jpg'
    },
    {
      id: 2,
      name: '自动化测试项目',
      desc: '这是一个自动化测试项目',
      coverImg: 'assets/img/covers/1.jpg'
    }
  ];
  constructor(public dialog: MatDialog, private cd: ChangeDetectorRef) {}

  ngOnInit() {}
  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {
      data: { title: '新建项目' }
    });
    // dialogRef.addPanelClass('my-dark-theme');
    dialogRef.afterClosed().subscribe(result => {
      this.projects = [
        ...this.projects,
        {
          id: 3,
          name: '一个新项目',
          desc: '这是一个一个新项目',
          coverImg: 'assets/img/covers/3.jpg'
        },
        {
          id: 4,
          name: '一个新项目2',
          desc: '这是一个一个新项目2',
          coverImg: 'assets/img/covers/4.jpg'
        }
      ];
      this.cd.detectChanges();
    });
  }

  launchInviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent);
  }

  launchUpdateDialog(project) {
    const dialogRef = this.dialog.open(NewProjectComponent, {
      data: { title: '编辑项目', project }
    });
  }
  launchConfirmDialog(project) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { title: '删除项目', content: '您确认要删除该项目么？' }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.projects = this.projects.filter(p => p.id !== project.id);
      this.cd.detectChanges();
    });
  }
}
