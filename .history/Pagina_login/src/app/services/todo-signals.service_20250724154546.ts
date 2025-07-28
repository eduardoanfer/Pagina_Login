import { Injectable, signal } from '@angular/core';
import { Todo } from '../models/model/todo-model';
@Injectable({
  providedIn: 'root'
})
export class TodoSignalsService {
  public todoState = signal<Array<Todo>>([]); // o estado do meu todo que é uma arrau da minha model]

  public updateTodos({id, title, description, completed }: Todo): void {
   if(title && id && description != null || undefined){
    // segunda vez já terei todos os dados no meu parâmetro
    this.todoState.mutate((todos) => {
      if(todos != null )
      {
        todos.push(new Todo (id, title, description, completed));
      }
    });
    this.saveTodosInLocalStorage(); // chama o método para salvar os dados no localStorage
  }
}
  //salvar os dados no localStorage
  public saveTodosInLocalStorage(): void {
    localStorage.setItem('todos', JSON.stringify(this.todoState()));
  }

}
