import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { TarefaComponent } from './tarefa/tarefa.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { TarefaDetailComponent } from './tarefa-detail/tarefa-detail.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TarefaComponent,
    PessoaComponent,
    DashboardComponent,
    MessagesComponent,
    TarefaDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }