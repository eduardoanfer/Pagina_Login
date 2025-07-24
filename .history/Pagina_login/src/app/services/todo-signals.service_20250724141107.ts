import { Injectable, signal } from '@angular/core';
import { Todo } from '..models/model/todo.model'; // Importa a model Todo

@Injectable({
  providedIn: 'root'
})
export class TodoSignalsService {
  public todoState = signal<Array<Todo>([]); // o estadodo meu todo que é uma arrau da minha model]

  public updateTodos({id, title, description, done }: Todo): void {
   if((title && id && description !=null || undefined){
    this.todoState.mutate((todos) => {
      if(todos != null){
        todos.push(new Todo(id, title, description, done));
      }
   })
  }
}
