import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/config/api.config";
import { ProfessorDTO } from "src/models/professor.dto";
import { StorageService } from "./storage.service";

@Injectable()
export class ProfessorService{

    constructor(public http: HttpClient, public storage: StorageService){
    }

    findByEmail(email: string): Observable<ProfessorDTO> {
        return this.http.get<ProfessorDTO>(
            `${API_CONFIG.baseUrl}/professores/email?value=${email}`
            );
    }

    insert(professor: ProfessorDTO){
        return this.http.post(
            `${API_CONFIG.baseUrl}/professores`,
            professor,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }
}