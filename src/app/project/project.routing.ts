import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login/login.component';
import { RegisterComponent } from '../login/register/register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [{ path: 'projects', component: ProjectListComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {}
