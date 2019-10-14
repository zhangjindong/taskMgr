import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskRoutingModule } from './task.routing';
import { NewTaskComponent } from './new-task/new-task.component';
import { CopyTaskComponent } from './copy-task/copy-task.component';
import { NewTaskListComponent } from './new-task-list/new-task-list.component';
import { QuickTaskComponent } from './quick-task/quick-task.component';

@NgModule({
  declarations: [
    TaskHomeComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskHeaderComponent,
    NewTaskComponent,
    CopyTaskComponent,
    NewTaskListComponent,
    QuickTaskComponent
  ],
  imports: [SharedModule, TaskRoutingModule],
  entryComponents: [NewTaskComponent, CopyTaskComponent, NewTaskListComponent]
})
export class TaskModule {}
