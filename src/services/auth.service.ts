import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { CredenciaisDTO } from "src/models/credenciais.dto";
import { API_CONFIG } from "src/config/api.config";

@Injectable()
export class AuthService {

    constructor(public http: HttpClient) {
        
    }

    authenticate(creds: CredenciaisDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/login`, 
            creds,
            {
                observe: 'response',
                responseType: 'text'
            });
    }
}