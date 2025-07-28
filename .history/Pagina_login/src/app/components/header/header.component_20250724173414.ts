import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog,MatDialogModule } from '@angular/material/dialog';
import { TodoFormComponent } from '../todo-form/todo-form.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDividerModule,MatIconModule,MatDialogModule ], // importacoes que irei usar
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent {
  private dialogService = Inject(MatDialog);
  // criando metodo para abrir o modal
  public handleOpenModal() : void {
    this.dialogService.open(TodoFormComponent, {
      width: '50vw', // largura do modal
      maxheight: '80vh', // altura do modal

    }) // abrindo o modal, mas espera dois parametros
    // o primeiro é o componente que será aberto, o segundo é um objeto de configuração
  }

}
