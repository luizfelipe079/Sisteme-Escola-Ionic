import { AlunoDTO } from "./aluno.dto";
import { DisciplinaDTO } from "./disciplina.dto";

export interface NotaDTO{
    id: string,
    nota1: string;
    nota2: string;
    aluno?: AlunoDTO;
    disciplina?: DisciplinaDTO;
}