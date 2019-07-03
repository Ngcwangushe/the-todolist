import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Contet-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoUrl = 'https://jsonplaceholder.typicode.com/todos';
  limit = '?_limit=5';
  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todoUrl}${this.limit}`);
  }
  toggleCopleted(todo: Todo): Observable<any> {
    const url = `${this.todoUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
  // Delete Todo
  deleteTodo(todo: Todo): Observable<any> {
    const url = `${this.todoUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  // Add todo
  addTodo(todo: Todo){
    return this.http.post<Todo>(this.todoUrl, todo, httpOptions);
  }
}
