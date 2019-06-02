import { Component, OnInit } from '@angular/core';
import { TarefaService } from 'src/app/tarefa.service';
import { Tarefa } from './tarefa';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  tarefas : Tarefa[];

  constructor(private tarefaService : TarefaService) { }

  getTarefas(): void{
      this.tarefaService.getTarefas()
        .subscribe(tarefas => this.tarefas = tarefas);
  }
  ngOnInit() {
      this.getTarefas();
  }

}