import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { CredenciaisDTO } from "src/models/credenciais.dto";
import { API_CONFIG } from "src/config/api.config";
import { LocalUser } from "src/models/local_user";
import { StorageService } from "./storage.service";

@Injectable()
export class AuthService {

    constructor(public http: HttpClient, public storage: StorageService) {
        
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

    successfulLogin(authorizationValue: string) {
        let tok = authorizationValue;
        let user: LocalUser = {
            token: tok
        };
        this.storage.setLocalUser(user);
    }

    logout(){
        this.storage.setLocalUser(null);
    }
}