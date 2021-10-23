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

}