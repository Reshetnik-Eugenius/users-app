import { Component, OnInit, Input } from '@angular/core';
import { IUserTodo } from 'src/app/shared/model/user-app.model';

@Component({
  selector: 'app-user-todo',
  templateUrl: './user-todo.component.html',
  styleUrls: ['./user-todo.component.scss']
})
export class UserTodoComponent implements OnInit {

  @Input() todo!: IUserTodo;

  constructor() { }

  ngOnInit(): void {
  }

}
