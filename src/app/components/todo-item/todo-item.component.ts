import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../_services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }
  // set dynamic classes
  setClasses() {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed
    };
    return classes;
  }
  onToggle(todo) {
    // toggle in UI
    todo.completed = !todo.completed;
    // Toggle on server
    this.todoService.toggleCopleted(todo).subscribe(todo =>
      console.log(todo));
  }

  onDelete(toto) {
    this.deleteTodo.emit(this.todo);
  }
}
