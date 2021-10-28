import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/config/api.config";
import { NotaDTO } from "src/models/nota.dto";
import { StorageService } from "./storage.service";

@Injectable()
export class NotaService {
    
    constructor(public http:HttpClient, public storage:StorageService){
    }

    findNotaDisciplina(id_aluno: string, id_disciplina: string): Observable<NotaDTO>{
        return this.http.get<NotaDTO>(
            `${API_CONFIG.baseUrl}/notas/aluno/${id_aluno}/disciplina/${id_disciplina}`
        );
    }

    findAllNotasAluno(id_aluno: string): Observable<NotaDTO[]>{
        return this.http.get<NotaDTO[]>(
            `${API_CONFIG.baseUrl}/notas/aluno/${id_aluno}`
        );
    }
    
    inserirNota(nota: NotaDTO, id_aluno: string, id_disciplina: string){
        return this.http.post(
            `${API_CONFIG.baseUrl}/notas/add/aluno/${id_aluno}/disc/${id_disciplina}`,
            nota,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }
}