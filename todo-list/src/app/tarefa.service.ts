import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa/tarefa';
import { TAREFAS } from './tarefa/mock-tarefas';
import { Observable, of } from 'rxjs';
import { MessageService} from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(private messageService: MessageService) { }

  getTarefas(): Observable<Tarefa[]>{
    this.messageService.add('TarefaService: tarefas buscadas ');
    return of(TAREFAS);
  }

  getTarefa(id: number): Observable<Tarefa> {
    this.messageService.add('TarefaService: Tarefa buscada id=${id}');
    return of(TAREFAS.find(tarefa => tarefa.id === id));
  }
}
