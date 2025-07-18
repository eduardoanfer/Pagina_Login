import { Injectable, signal } from '@angular/core';
import { Todo } from '..models/model/todo.model'; // Importa a model Todo

@Injectable({
  providedIn: 'root'
})
export class TodoSignalsService {
  public todoState = signal<Array<Todo>(); // o estadodo meu todo que é uma arrau da minha model]

}
