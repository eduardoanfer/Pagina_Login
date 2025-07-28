import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TodoSignalsService } from '../../services/todo-signals.service';
@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './todo-form.component.html',
  styleUrls: []
})
export class TodoFormComponent {
  // injetando o serviço de formulário dentro do meu componente (claase)
  // o inject é uma função que permite injetar dependências
  private todoSignalService = Inject(TodoSignalsService);
  public allTodos = this.todoSignalService.todoState(); // toda a lista de todos

  //criando o formulário reativo (Reactive Forms) ele sera usado para criar e validar o formulário (objeto)
  //o nome de todosForm é o nome do formulário que será usado no HTML
  public todosForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),

  })
  // headle
  public headleCreateNewTodo() {
   if(this.todosForm.valid && this.todosForm.value) {
    const title = String(this.todosForm.value.title);
    const description = String(this.todosForm.value.description);
    const id = this.allTodos > 0 ? this.allTodos[this.allTodos.length - 1].id + 1 : 1;
    const completed = false;
    this.todoSignalService.updateTodos({
      id,
      title,
      description,
      completed
    });
  }
    else {
      console.error('Formulário inválido');
      return;
    }
  }
}
