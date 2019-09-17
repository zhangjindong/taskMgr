import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {
  lists = [
    {
      id: 1,
      name: '待办',
      tasks: [
        {
          id: 1,
          desc: '任务1',
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars：svg-11',
            dueDate: new Date()
          }
        },
        {
          id: 1,
          desc: '任务1',
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars：svg-11',
            dueDate: new Date()
          }
        },
        {
          id: 1,
          desc: '任务1',
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatars：svg-11',
            dueDate: new Date()
          }
        }
      ]
    },
    {
      id: 2,
      name: '已办',
      tasks: [
        {
          id: 1,
          desc: '任务1',
          owner: {
            id: 1,
            name: '王五',
            avatar: 'avatars：svg-11',
            dueDate: new Date()
          }
        },
        {
          id: 1,
          desc: '任务1',
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars：svg-11',
            dueDate: new Date()
          }
        },
        {
          id: 1,
          desc: '任务1',
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars：svg-11',
            dueDate: new Date()
          }
        }
      ]
    },
    {
      id: 3,
      name: '进行中',
      tasks: [
        {
          id: 1,
          desc: '任务1',
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars：svg-11',
            dueDate: new Date()
          }
        },
        {
          id: 1,
          desc: '任务1',
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars：svg-11',
            dueDate: new Date()
          }
        },
        {
          id: 1,
          desc: '任务1',
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars：svg-11',
            dueDate: new Date()
          }
        }
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
