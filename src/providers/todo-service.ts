import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TodoService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoService {
private todos = [];
private archiveTodoList = [];

  constructor(public http: Http) {
    console.log('Hello TodoService Provider');
  }

  getTodos(){
    return this.todos;
  }

  getArchievedTodos(){
    return this.archiveTodoList;
  }

  archieveTodo(todoIndex){
    this.archiveTodoList.push(this.todos[todoIndex]);
    this.todos.splice(todoIndex, 1);
  }

  addTodo(todo){
    this.todos.push(todo);
  }

  editTodo(todoIndex, todoText){
    this.todos[todoIndex] = todoText;
  }

}
