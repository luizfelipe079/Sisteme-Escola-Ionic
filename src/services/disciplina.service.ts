import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/config/api.config";
import { DisciplinaDTO } from "src/models/disciplina.dto";
import { StorageService } from "./storage.service";

@Injectable()
export class DisciplinaService{

    constructor(public http:HttpClient, public storage:StorageService){
    }

    insert(disciplina: DisciplinaDTO){
        return this.http.post(
            `${API_CONFIG.baseUrl}/disciplinas`,
            disciplina,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }

    findAllDisciplinas(): Observable<DisciplinaDTO[]>{
        return this.http.get<DisciplinaDTO[]>(
            `${API_CONFIG.baseUrl}/disciplinas`
        );
    }

}