import {
  Component,
  OnInit,
  HostBinding,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { MatDialogTitle, MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';
import { slideToRightAnim } from '../../anims/router.anim';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [slideToRightAnim],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskHomeComponent implements OnInit {
  @HostBinding('@routeAnim') state;
  lists = [
    {
      id: 1,
      name: '待办',
      order: 1,
      tasks: [
        {
          id: 1,
          desc: '任务1爱尚阿斯蒂芬阿斯蒂芬阿斯蒂芬',
          complate: false,
          priority: 1,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-1'
          },
          dueDate: new Date()
        },
        {
          id: 1,
          desc: '任务1',
          complate: false,
          priority: 2,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-2'
          },
          dueDate: new Date()
        },
        {
          id: 1,
          desc: '任务1',
          complate: false,
          priority: 1,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatars:svg-3'
          },
          dueDate: new Date()
        }
      ]
    },
    {
      id: 2,
      name: '已办',
      order: 2,
      tasks: [
        {
          id: 1,
          desc: '任务1:去星巴克买咖啡',
          complate: true,
          priority: 3,
          owner: {
            id: 1,
            name: '王五',
            avatar: 'avatars:svg-4'
          },
          dueDate: new Date()
        },
        {
          id: 1,
          desc: '任务2:菜市场调研',
          complate: true,
          priority: 1,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-5'
          },
          dueDate: new Date(),
          reminder: new Date()
        },
        {
          id: 1,
          desc: '任务3:干就完了',
          complate: true,
          priority: 2,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-6'
          },
          dueDate: new Date()
        }
      ]
    },
    {
      id: 3,
      name: '进行中',
      order: 3,
      tasks: [
        {
          id: 1,
          desc: '任务1',
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-7'
          },
          dueDate: new Date()
        },
        {
          id: 1,
          desc: '任务1',
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-8'
          },
          dueDate: new Date()
        },
        {
          id: 1,
          desc: '任务1',
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-9'
          },
          dueDate: new Date()
        }
      ]
    }
  ];

  constructor(private dialog: MatDialog, private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent, {
      data: { title: '新建任务' }
    });
  }

  launchCopyTaskDialog() {
    this.dialog.open(CopyTaskComponent, { data: { lists: this.lists } });
  }

  launchUpdateTaskDialog(task) {
    this.dialog.open(NewTaskComponent, {
      data: { title: '修改任务', task }
    });
  }

  launchConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { title: '删除任务列表', content: '您确认要删除该任务列表么？' }
    });
    dialogRef.afterClosed().subscribe(console.log);
  }

  launchNewListDialog(list) {
    const dialogRef = this.dialog.open(NewTaskListComponent, {
      data: { title: '新建列表' }
    });
    dialogRef.afterClosed().subscribe(console.log);
  }
  launchEditListDialog(list) {
    const dialogRef = this.dialog.open(NewTaskListComponent, {
      data: { title: '更改列表名称', list }
    });
    dialogRef.afterClosed().subscribe(console.log);
  }
  handleMove(srcData, list) {
    switch (srcData.tag) {
      case 'task-item':
        console.log('handling item');
        break;
      case 'task-list':
        console.log('handling list');
        const srcList = srcData.data;
        const tempOrder = srcList.order;
        srcList.order = list.order;
        list.order = tempOrder;
        break;
      default:
        break;
    }
  }
  handleQuickTask(desc: string) {
    console.log(desc);
  }
}
