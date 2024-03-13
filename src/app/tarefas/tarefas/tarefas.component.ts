import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.scss'
})
export class TarefasComponent {
  constructor(private toastr: ToastrService) { }

  cadastrarTarefa() {
    
    this.toastr.success('Tarefa cadastrada com sucesso!', 'Sucesso');
  }
}
