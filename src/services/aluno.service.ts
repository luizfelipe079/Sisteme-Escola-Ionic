import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/config/api.config";
import { AlunoDTO } from "src/models/aluno.dto";
import { StorageService } from "./storage.service";

@Injectable()
export class AlunoService{

    constructor(public http:HttpClient, public storage:StorageService){
    }

    findByEmail(email: string): Observable<AlunoDTO>{
        return this.http.get<AlunoDTO>(
            `${API_CONFIG.baseUrl}/alunos/email?value=${email}`
        );
    }

    findAllAlunos(): Observable<AlunoDTO[]>{
        return this.http.get<AlunoDTO[]>(
            `${API_CONFIG.baseUrl}/alunos`
        );
    }

    insert(professor: AlunoDTO){
        return this.http.post(
            `${API_CONFIG.baseUrl}/alunos`,
            professor,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }

    inserirAlunoDisciplina(id_aluno: string, id_disciplina: string){
        return this.http.post(
           `${API_CONFIG.baseUrl}/alunos/${id_aluno}/adicionar/${id_disciplina}`,
           ""
        )
    }

}