import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/tarefa/tarefa';
import { TarefaService } from 'src/app/tarefa.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tarefas: Tarefa[] = [];
  
  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.getTarefas();
  }

  getTarefas(): void{
    this.tarefaService.getTarefas()
      .subscribe(tarefas => this.tarefas = tarefas.slice(0,4));
  }

}
