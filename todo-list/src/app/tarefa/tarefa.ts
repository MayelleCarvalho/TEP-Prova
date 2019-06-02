    
import { Pessoa } from 'src/app/pessoa/pessoa';

export class Tarefa {
    id: number;
    descricao: string;
    responsavel: Pessoa;
    porcentagem: number;
}