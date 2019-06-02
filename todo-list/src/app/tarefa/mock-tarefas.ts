import { Tarefa } from './tarefa';
import { PESSOAS } from 'src/app/pessoa/mock-pessoas';

export const TAREFAS: Tarefa[] = [
    {id: 1, descricao: "Fazer compras", responsavel: PESSOAS[0], porcentagem: 0.15},
    {id: 2, descricao: "Lavar as louças", responsavel: PESSOAS[0], porcentagem: 0.10},
    {id: 3, descricao: "Fazer tarefas da faculdade", responsavel: PESSOAS[0], porcentagem: 0.10},
    {id: 4, descricao: "Lavar a casa", responsavel: PESSOAS[0], porcentagem: 0.10}
];