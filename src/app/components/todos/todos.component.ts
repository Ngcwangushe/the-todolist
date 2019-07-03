import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() { }

  ngOnInit() {
    this.todos = [{
      id: 1,
      tittle: 'to doOne',
      completed: false
    },
    {
      id: 2,
      tittle: 'to doTwo',
      completed: true
    },
    {
      id: 3,
      tittle: 'to doThree',
      completed: false
    }];
  }


}
